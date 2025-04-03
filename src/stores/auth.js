import { ref } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();
  const user = ref([]);

  const isAuthenticated = () => {
    return !!localStorage.getItem("AUTH_TOKEN");
  };

  const iniciar = async (item) => {
    await axios
      .post("http://localhost:3000/api/auth/login", item)
      .then(({ data }) => {
        localStorage.setItem("AUTH_TOKEN", data.token);
        getUsr(data.token);
        router.push({ name: "home" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getUsr = async (tok) => {
    await axios
      .get("http://localhost:3000/api/auth/user", {
        headers: {
          Authorization: `Baerer ${tok}`,
        },
      })
      .then(({ data }) => {
        user.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const cerrarSesion = async () => {
    localStorage.removeItem("AUTH_TOKEN");
    await router.push({ name: "home" });
    window.location.reload()
  };
  return {
    iniciar,
    cerrarSesion,
    user,
    isAuthenticated
  };
});
