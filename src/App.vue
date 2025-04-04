<script setup>
import { useRoute } from "vue-router";
import { RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";
import Login from "./views/Login.vue";
import CrearCuenta from './views/CrearCuenta.vue'

// Obtiene la ruta activa
const route = useRoute();
</script>

<template>
  <VApp>
    <div v-if="route.path === '/login'">
      <Login />
    </div>
    
    <div v-else-if="route.path === '/crear-cuenta'">
      <CrearCuenta />
    </div>
    
    <div v-else-if="route.path.startsWith('/crm')">
      <v-navigation-drawer app permanent>
        <v-list nav class="mt-4">
          <v-list-item link to="/">Inicio</v-list-item>
          <v-list-item link to="/crm/usuarios">Usuarios</v-list-item>
          <v-list-item link to="/crm/compras">Compras</v-list-item>
          <v-list-item link to="/crm/productos">Productos</v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app title="CRM"></v-app-bar>

      <v-main class="d-flex align-center justify-center">
        <RouterView />
      </v-main>
    </div>

    <div v-else>
      <HomeView />
    </div>
  </VApp>
</template>

<style scoped></style>
