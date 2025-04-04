<!-- ProductoDialog.vue -->
<script setup>
import { useProductosStore } from "@/stores/productos.js";

const dataPro = useProductosStore();

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
};
</script>

<template>
  <v-dialog v-model="dataPro.dialog" width="80%" persistent>
    <v-card width="100%" class="pa-3">
      <h3 class="pa-3">Actualizar: {{ dataPro.item.nombre }}</h3>
      <v-row no-gutters>
        <v-col cols="12">
          <v-text-field
            variant="outlined"
            v-model="dataPro.item.nombre"
            label="Nombre"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            variant="outlined"
            v-model="dataPro.item.detalles"
            label="Detalles"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            variant="outlined"
            v-model="dataPro.item.precio"
            type="number"
            label="Precio"
          ></v-text-field>
          </v-col>
          <v-col cosl="12">
          <v-text-field
            variant="outlined"
            v-model="dataPro.item.cantidad"
            type="number"
            label="Cantidad"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-file-input
            accept="image/*"
            label="Imagen"
            variant="outlined"
            v-model="dataPro.item.imagen"
          ></v-file-input>
        </v-col>
        <v-col cols="12" class="d-flex justify-end">
            <v-btn size="small" color="red" class="ma-2" @click="dataPro.dialog=false">Cancelar</v-btn>
            <v-btn size="small" color="green" class="ma-2" @click="dataPro.updateProductoById(dataPro.item)">Actualizar</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
