<script setup>
import { ref, onMounted } from "vue";
import { useUsuariosStore } from "@/stores/usuarios.js";
import Actualizar from "./Actualizar.vue";
import Eliminar from "./Eliminar.vue";

const dataUsr = useUsuariosStore();
</script>

<template>
  <v-card title="Productos" width="100%">
    <v-card color="green">
      <h4 class="text-center" v-if="dataUsr.msg !== ''">{{ dataUsr.msg }}</h4>
    </v-card>
    <template v-slot:text>
      <v-text-field
        v-model="dataUsr.search"
        label="Buscar"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>

    <v-data-table
      :headers="dataUsr.headers"
      :items="dataUsr.userData"
      :search="dataUsr.search"
    >
      <template v-slot:item.acciones="{ item }">
        <v-card
          class="d-flex flex-column"
          elevation="0"
          rounded
          color="transparent"
        >
          <v-btn
            class="ma-1"
            size="small"
            color="primary"
            @click="dataUsr.actualizar(item)"
            >Actualizar</v-btn
          >
          <v-btn
            class="ma-1"
            size="small"
            color="red"
            @click="dataUsr.eliminar(item)"
            >Eliminar</v-btn
          >
        </v-card>
      </template>
    </v-data-table>
    <Actualizar />
    <Eliminar />
  </v-card>
</template>

<style scoped></style>
