<script setup>
import { useRoute } from "vue-router";
import { RouterView } from "vue-router";
import HomeView from "./views/HomeView.vue";

const route = useRoute();
</script>

<template>
  <VApp>
    <div v-if="route.path == '/crm'">
      <v-navigation-drawer app>
        <v-list nav class="mt-4">
          <v-list-item link to="/">Inicio</v-list-item>
          <v-list-item link to="/usuarios">Usuarios</v-list-item>
          <v-list-item link to="/compras">Compras</v-list-item>
          <v-list-item link to="/crm">CRM</v-list-item>
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
