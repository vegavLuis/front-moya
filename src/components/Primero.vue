<script setup>
import imgRight from "@/assets/images/right.png";
</script>

<template>
  <v-card class="d-flex justify-center" height="100%" color="#f5f5f5">
    <v-row no-gutters>
      <!-- En dispositivos móviles, la imagen se muestra arriba y el texto abajo -->
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-sheet class="ma-2 pa-2" color="transparent">
          <v-img :src="imgRight" width="280" />
        </v-sheet>
      </v-col>

      <!-- Texto debajo de la imagen en dispositivos móviles y al lado en pantallas más grandes -->
      <v-col cols="12" md="6" class="d-flex align-center justify-start">
        <v-sheet class="ma-2 pa-2 text-left" color="transparent">
          <h1>Ofertas especiales</h1>
          <h2>estrena las mejores prendas</h2>
          <v-btn color="black" class="mt-3"> Informacion </v-btn>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
h1 {
  font-size: 90px;
}

h2 {
  font-size: 20px;
}
</style>
