<script setup>
import { ref } from "vue";
import Primero from "@/components/Primero.vue";
import Segundo from "@/components/Segundo.vue";
import Tercero from "@/components/Tercero.vue";
import Cuarto from "@/components/Cuarto.vue";
import { useCarritoStore } from "@/stores/carrito.js";
import { useAuthStore } from "@/stores/auth.js";

const dataCarrito = useCarritoStore();
const dataAuth = useAuthStore();
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

      <v-menu max-height="500" width="230" :close-on-content-click="false">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in dataCarrito.carrito"
            :key="index"
            :value="index"
          >
            <v-card color="transparent">
              <v-row no-gutters>
                <v-col cols="12">
                  <v-card color="transparent ">
                    <v-row no-gutters="">
                      <v-col cols="12">
                        {{ item.nombre }}
                      </v-col>
                      <v-col cols="12" class="d-flex justify-center">
                        <v-img :src="item.imagenBase64" max-width="60" />
                      </v-col>
                      <v-col cols="6" class="d-flex justify-start"
                        >Cantidad: {{ item.cantidad }}</v-col
                      >
                      <v-col cols="6" class="d-flex justify-end"
                        >$ {{ item.precioTotal }}
                      </v-col>
                      <v-col cols="12" class="d-flex justify-space-evenly mt-3">
                        <v-btn
                          density="compact"
                          size="small"
                          icon="mdi-minus"
                          color="blue"
                          @click="dataCarrito.disminuir(item)"
                        ></v-btn>
                        1
                        <v-btn
                          density="compact"
                          size="small"
                          icon="mdi-plus"
                          color="green"
                          @click="dataCarrito.aumentar(item)"
                        ></v-btn>
                      </v-col>
                      <v-col cols="12">
                        <v-btn
                          block
                          class="mt-3"
                          size="small"
                          color="red"
                          @click="dataCarrito.eliminar(item)"
                          >Eliminar</v-btn
                        >
                      </v-col>
                    </v-row>
                    <br />

                    <br />
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-list-item>
        </v-list>
      </v-menu>
      <div v-if="dataAuth.user?.nombre">
        <p>{{ dataAuth.user.nombre }}
        <v-btn v-if="dataAuth.user?.nombre" color="red" size="small" @click="dataAuth.cerrarSesion">Cerrar Sesion</v-btn>
        </p>
      </div>
      <div v-else>
        <v-btn color="green" size="small" to="/login">Login</v-btn>
        <v-btn color="primary" size="small" to="/crear-cuenta">Crear Cuenta</v-btn>
      </div>
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
