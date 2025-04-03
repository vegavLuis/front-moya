<script setup>
import { ref } from 'vue';
import { useUsuariosStore } from "@/stores/usuarios.js";

const dataUsuarios = useUsuariosStore()

const item = ref({
    nombre:"",
    apPaterno:"",
    apMaterno:"",
    email:"",
    password:""
})

const submitForm = async (item) => {
    dataUsuarios.createUsuario(item);
};
</script>

<template>
    <v-sheet class="d-flex align-center justify-center" height="100vh">
    <v-card width="75%">
      <v-form @submit.prevent="submitForm(item)">
        <h3 class="text-center">Crear Cuenta</h3>
        <v-card v-if="dataUsuarios.datamsg != ''" color="red" class="pa-2 d-flex justify-center">{{ dataUsuarios.datamsg }}</v-card>
        <v-row no-gutters>
          <v-col cols="12" class="pa-4">
            <v-text-field  v-model="item.nombre" label="Nombre"></v-text-field>
            <v-text-field  v-model="item.apPaterno" label="Apellido paterno"></v-text-field>
            <v-text-field  v-model="item.apMaterno" label="Apellido materno"></v-text-field>
            <v-text-field  v-model="item.email" label="Correo"></v-text-field>
            <v-text-field  v-model="item.password" label="Contraseña"></v-text-field>
          </v-col>
          <v-col cols="6" class="d-flex justify-center">
            <v-btn color="green" type="submit">Crear</v-btn>
          </v-col>
          <v-col cols="6" class="d-flex justify-center">
            <v-btn color="primary" variant="text" to="/login">Ingresar</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<style scoped>
    
</style>