<script setup>
import Primero from "@/components/Primero.vue";
import Segundo from "@/components/Segundo.vue";
import Tercero from "@/components/Tercero.vue";
import Cuarto from "@/components/Cuarto.vue";
</script>

<template>
  <div>
    <v-app-bar app>
      <v-app-bar-title>Logo</v-app-bar-title>

      <div class="d-flex justify-center">
        <p class="mr-8">Inicio</p>
        <p class="mr-8">Servicios</p>
        <p class="mr-8">Productos</p>
        <p class="mr-8">Contacto</p>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div>
        <Primero />
        <Segundo />
        <Tercero />
        <Cuarto />
      </div>
    </v-main>
  </div>
</template>

<style scoped></style>
