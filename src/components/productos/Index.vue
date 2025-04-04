<script setup>
import { ref, onMounted } from "vue";
import { useProductosStore } from "@/stores/productos.js";
import Actualizar from "./Actualizar.vue";
import axios from "axios";

const dataPro = useProductosStore()
</script>

<template>
  <v-card title="Productos" width="100%">
    <template v-slot:text>
      <v-text-field
        v-model="dataPro.search"
        label="Buscar"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>

    <v-data-table :headers="dataPro.headers" :items="dataPro.dataProductos" :search="dataPro.search">
      <template v-slot:item.imagenBase64="{ item }">
        <v-card class="my-2 d-flex justify-center" elevation="2" rounded>
          <v-img :src="item.imagenBase64" max-width="60" cover></v-img>
        </v-card>
      </template>
      <template v-slot:item.acciones="{ item }">
        <v-card class="d-flex flex-column" elevation="0" rounded color="transparent">
          <v-btn class="ma-1" size="small" color="primary" @click="dataPro.actualizar(item)">Actualizar</v-btn>
          <v-btn class="ma-1" size="small" color="red">Eliminar</v-btn>
        </v-card>
      </template>
    </v-data-table>
    <Actualizar></Actualizar>
  </v-card>
</template>

<style scoped></style>
