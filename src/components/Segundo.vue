<script setup>
import imgF1 from "@/assets/images/f1.png";
import imgF2 from "@/assets/images/f2.png";
import imgF3 from "@/assets/images/f3.png";
</script>
<template>
  <v-card elevation="0" class="pa-4">
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <v-card class="mx-auto pa-4" max-width="400">
          <v-img height="200px" :src="imgF1" contain></v-img>
          <v-card-title>Producto 1 </v-card-title>
          <v-card-subtitle
            >Nulla excepteur eiusmod culpa qui et magna ipsum quis do deserunt
            in.</v-card-subtitle
          >
          <v-btn color="black" class="ml-4 mt-2">Informacion</v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto pa-4" max-width="400">
          <v-img height="200px" :src="imgF2" contain></v-img>
          <v-card-title>Producto 2 </v-card-title>
          <v-card-subtitle
            >Nulla excepteur eiusmod culpa qui et magna ipsum quis do deserunt
            in.</v-card-subtitle
          >
          <v-btn color="black" class="ml-4 mt-2">Informacion</v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto pa-4" max-width="400">
          <v-img height="200px" :src="imgF3" contain></v-img>
          <v-card-title>Producto 3 </v-card-title>
          <v-card-subtitle
            >Nulla excepteur eiusmod culpa qui et magna ipsum quis do deserunt
            in.</v-card-subtitle
          >
          <v-btn color="black" class="ml-4 mt-2">Informacion</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
<style scoped></style>
