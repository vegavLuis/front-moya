import { ref, computed, onMounted } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";

export const useUsuariosStore = defineStore("Usuarios", () => {
  const router = useRouter();
  const userData = ref([]);
  const userByID = ref({});
  const datamsg = ref("");
  const search = ref("");
  const dialog = ref(false);
  const dialogEliminar = ref(false);
  const msg = ref("");
  const headers = ref([
    {
      align: "center",
      key: "nombre",
      sortable: false,
      title: "Nombre",
    },
    {
      align: "center",
      key: "apPaterno",
      sortable: false,
      title: "Apellido paterno",
    },
    {
      align: "center",
      key: "apMaterno",
      sortable: false,
      title: "Apellido materno",
    },
    {
      align: "center",
      key: "email",
      sortable: false,
      title: "Correo",
    },
    {
      align: "center",
      key: "rol",
      sortable: false,
      title: "Rol",
    },
    {
      align: "center",
      key: "acciones",
      sortable: false,
      title: "Acciones",
    },
  ]);

  const createUsuario = (item) => {
    axios
      .post("http://localhost:3000/api/usuarios", item)
      .then(({ data }) => {
        userData.value = data;
        console.log(userData.value);
        router.push({ name: "home" });
      })
      .catch(({ response }) => {
        datamsg.value = response.data.msg;
        setTimeout(() => {
          datamsg.value = "";
        }, 3000);
      });
  };
  const getAllUsuarios = async () => {
    await axios
      .get(`http://localhost:3000/api/usuarios`)
      .then(({ data }) => {
        userData.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getUsuarioById = async (id) => {
    axios
      .get(`http://localhost:3000/api/usuarios/${id}`)
      .then(({ data }) => {
        userByID.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateUsuarioById = async (item) => {
    await axios
      .put(`http://localhost:3000/api/usuarios/${item._id}`, item)
      .then(({ data }) => {
        getAllUsuarios();
        dialog.value = false;
        msg.value = data.msg;
        setTimeout(() => {
          msg.value = "";
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteUsuarioById = async (item) => {
    await axios
      .delete(`http://localhost:3000/api/usuarios/${item}`)
      .then(({data}) => {
        getAllUsuarios();
        dialogEliminar.value = false;
        msg.value = data.msg;
        setTimeout(() => {
          msg.value = "";
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const actualizar = async (item) => {
    await getUsuarioById(item._id);
    dialog.value = true;
  };
  const eliminar = async (item) => {
    await getUsuarioById(item._id);
    dialogEliminar.value = true;
  };
  onMounted(() => {
    getAllUsuarios();
  });
  return {
    createUsuario,
    datamsg,
    userData,
    search,
    headers,
    actualizar,
    eliminar,
    userByID,
    dialog,
    dialogEliminar,
    updateUsuarioById,
    deleteUsuarioById,
    msg,
  };
});
