import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";

export const useUsuariosStore = defineStore("Usuarios", () => {
  const userData = ref([]);
  const router = useRouter()
  const datamsg = ref("");
  const createUsuario = (item) => {
    axios
      .post("http://localhost:3000/api/usuarios", item)
      .then(({ data }) => {
        userData.value = data
        console.log(userData.value);
        router.push({ name: "home" });
      })
      .catch(({ response }) => {
        datamsg.value = response.data.msg;
        setTimeout(() => {
            datamsg.value = ""
        }, 3000);
      });
  };
  return { createUsuario, datamsg };
});
