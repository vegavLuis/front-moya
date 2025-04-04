<script setup>
import { useUsuariosStore } from "@/stores/usuarios";

const dataUsr = useUsuariosStore();
</script>
<template>
  <v-dialog v-model="dataUsr.dialogEliminar" width="80%" persistent>
    <v-card width="100%" class="pa-3">
        <h3 class="text-center">
            ¿Deseas eliminar a: {{dataUsr.userByID.nombre}}?
        </h3>
        <v-row no-gutters>
            <v-col cols="12" class="d-flex justify-center ma-2">
                <v-btn class="ma-1" color="red" @click="dataUsr.dialogEliminar = false">Cancelar</v-btn>
                <v-btn class="ma-1" color="green" @click="dataUsr.deleteUsuarioById(dataUsr.userByID._id)">Aceptar</v-btn>
            </v-col>
        </v-row>
    </v-card>
  </v-dialog>
</template>

<style></style>
