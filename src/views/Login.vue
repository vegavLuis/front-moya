<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth.js';

const item = ref({
  email: '',
  password: ''
});

const dataAuth = useAuthStore();

const submitForm = () => {
  dataAuth.iniciar(item.value);
};
</script>

<template>
  <v-sheet class="d-flex align-center justify-center" height="100vh">
    <v-card width="75%">
      <v-form @submit.prevent="submitForm">
        <h3 class="text-center">Iniciar Sesion</h3>
        <v-row no-gutters>
          <v-col cols="12" class="pa-4">
            <v-text-field v-model="item.email" label="Email"></v-text-field>
            <v-text-field v-model="item.password" label="Password" type="password"></v-text-field>
          </v-col>
          <v-col cols="6" class="d-flex justify-center">
          <v-btn color="green" type="submit">Enviar</v-btn>
          </v-col>
          <v-col cols="6" class="d-flex justify-center">
            <v-btn color="primary" variant="text" to="/crear-cuenta">Crear Cuenta</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<style scoped></style>
