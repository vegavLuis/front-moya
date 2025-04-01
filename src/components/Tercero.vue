<script setup>
import axios from "axios";
import { ref } from "vue";
import { onMounted } from "vue";

// Declarar la referencia donde se almacenarán los productos
const dataProduc = ref([]);

// Función para obtener los productos del backend
const getAllProductos = () => {
  axios
    .get("http://localhost:3000/api/productos") // Asegúrate de que esta URL sea correcta
    .then(({ data }) => {
      dataProduc.value = data;
      console.log(dataProduc.value);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Ejecutar la función cuando el componente se monte
onMounted(() => {
  getAllProductos();
});
</script>

<template>
  <v-card elevation="0" class="pa-4">
    <h3 class="text-center">Productos</h3>
    <v-row no-gutters>
      <!-- Recorrer los productos y mostrar cada uno -->
      <v-col cols="12" md="6" v-for="(item, index) in dataProduc" :key="index">
        <v-card class="mx-auto pa-4" width="400">
          <v-img
            v-if="item.imagen && item.imagen.data"
            :src="'data:image/jpeg;base64,' + item.imagen.data"
            alt="Imagen del producto"
            height="200px"
            width="200px"
            contain
          />

          <img
            v-else
            :src="require('@/assets/images/1.png')"
            alt="Imagen predeterminada"
            height="200px"
            width="200px"
            contain
          />

          <v-card-title>{{ item.nombre }}</v-card-title>
          <v-card-subtitle>
            <v-row align="center" no-gutters>
              <v-col class="d-flex"> {{ item.detalles }} </v-col>
              <v-col class="d-flex justify-end"> {{ item.precio }}</v-col>
            </v-row>
          </v-card-subtitle>
          <v-btn color="black" class="ml-4 mt-2">Agregar al carrito</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
h3 {
  font-size: 50px;
}
</style>
