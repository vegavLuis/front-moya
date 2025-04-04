<!-- ProductoDialog.vue -->
<script setup>
import { useUsuariosStore } from "@/stores/usuarios";

const dataUsr = useUsuariosStore();
</script>

<template>
  <v-dialog v-model="dataUsr.dialog" width="80%" persistent>
    <v-card width="100%" class="pa-3">
      <h3 class="pa-3">Actualizar: {{ dataUsr.userByID.nombre }}</h3>
      <v-row no-gutters>
        <v-col cols="12">
          <v-text-field
            variant="outlined"
            v-model="dataUsr.userByID.nombre"
            label="Nombre"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            variant="outlined"
            v-model="dataUsr.userByID.apPaterno"
            label="Apellido paterno"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            variant="outlined"
            v-model="dataUsr.userByID.apMaterno"
            label="Apellido materno"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            variant="outlined"
            v-model="dataUsr.userByID.email"
            label="Correo"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            variant="outlined"
            v-model="dataUsr.userByID.password"
            label="Contraseña"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="d-flex justify-end">
            <v-btn size="small" color="red" class="ma-2" @click="dataUsr.dialog=false">Cancelar</v-btn>
            <v-btn size="small" color="green" class="ma-2" @click="dataUsr.updateUsuarioById(dataUsr.userByID)">Actualizar</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<style scoped></style>
