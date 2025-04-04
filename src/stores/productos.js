import { ref, onMounted } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useProductosStore = defineStore("Productos", () => {
  const dataProductos = ref([]);
  const item = ref({});
  const search = ref("");
  const dialog = ref(false);
  const itemAct = ref({
    nombre: "",
    detalles: "",
    precio: "",
    cantidad: "",
    imagen: "",
  });
  const headers = [
    {
      align: "start",
      key: "nombre",
      sortable: false,
      title: "Nombre",
    },
    {
      align: "start",
      key: "imagenBase64",
      sortable: false,
      title: "Imagen",
    },
    {
      align: "start",
      key: "precio",
      sortable: false,
      title: "Precio",
    },
    {
      align: "start",
      key: "detalles",
      sortable: false,
      title: "Detalles",
    },
    {
      align: "start",
      key: "acciones",
      sortable: false,
      title: "Acciones",
    },
  ];

  const getAllProductos = async () => {
    await axios
      .get("http://localhost:3000/api/productos")
      .then(({ data }) => {
        dataProductos.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getProductoById = async (id) => {
    await axios
      .get(`http://localhost:3000/api/productos/${id}`)
      .then(({ data }) => {
        item.value = data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateProductoById = async (item) => {
    console.log(item);
    // axios.put(`http://localhost:3000/api/productos/${item._id}`, item)
    // .then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });
  };
  const actualizar = async (item) => {
    await getProductoById(item._id);
    dialog.value = true;
  };
  onMounted(() => {
    getAllProductos();
  });
  return {
    dataProductos,
    search,
    getAllProductos,
    headers,
    actualizar,
    dialog,
    item,
    itemAct,
    updateProductoById
  };
});
