<script setup>
import img1 from "@/assets/images/1.png";
</script>
<template>
  <v-card elevation="0" class="pa-4">
    <h3 class="text-center">Productos</h3>
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <v-card class="mx-auto pa-4" width="400">
          <v-img height="200px" :src="img1" contain></v-img>
          <v-card-title>Elisyum</v-card-title>
          <v-card-subtitle>
            <v-row align="center" no-gutters>
              <v-col class="d-flex"> calidad premium </v-col>
              <v-col class="d-flex justify-end"> $200 </v-col>
            </v-row>
          </v-card-subtitle>
          <v-btn color="black" class="ml-4 mt-2">Agregar al carrito</v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="mx-auto pa-4" width="400">
          <v-img height="200px" :src="img1" contain></v-img>
          <v-card-title>Elisyum</v-card-title>
          <v-card-subtitle>
            <v-row align="center" no-gutters>
              <v-col class="d-flex"> calidad premium </v-col>
              <v-col class="d-flex justify-end"> $200 </v-col>
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
