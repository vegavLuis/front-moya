<script setup>
import imgI1 from "@/assets/images/i1.svg";
import imgI2 from "@/assets/images/i2.svg";
import imgI3 from "@/assets/images/i3.svg";
import imgB1 from "@/assets/images/b1.jpg";
import imgB2 from "@/assets/images/b2.jpg";
import imgB3 from "@/assets/images/b3.jpg";
</script>
<template>
  <v-card elevation="0" class="mt-12 mb-12">
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" width="400" elevation="0">
          <v-card class="ma-n2" elevation="0" color="#f5f5f5">
            <v-row justify="center" align="center">
              <v-col class="d-flex justify-center" cols="auto">
                <v-img :src="imgI1" width="80"></v-img>
              </v-col>
              <v-col class="d-flex justify-center" cols="auto">
                <div class="text-center">
                  <h4>Eu amet fugiat.</h4>
                  <span>Occaecat esse sit quis velit</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <v-img height="100%" :src="imgB1" cover />
          <v-card-title>BLOG 1</v-card-title>
          <v-card-subtitle class="text-wrap" style="white-space: normal">
            Contamos con accesorios de alta calidad que podrás disfrutar por un
            largo periodo
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" width="400" elevation="0">
          <v-card class="ma-n2" elevation="0" color="#f5f5f5">
            <v-row justify="center" align="center">
              <v-col class="d-flex justify-center" cols="auto">
                <v-img :src="imgI2" width="80"></v-img>
              </v-col>
              <v-col class="d-flex justify-center" cols="auto">
                <div class="text-center">
                  <h4>Eu amet fugiat.</h4>
                  <span>Occaecat esse sit quis velit</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <v-img height="100%" :src="imgB2" cover />
          <v-card-title>BLOG 2</v-card-title>
          <v-card-subtitle class="text-wrap" style="white-space: normal">
            Contamos con calzado de alta calidad que sentiras que tus pies estan
            en el cielo
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mx-auto" width="400" elevation="0">
          <v-card class="ma-n2" elevation="0" color="#f5f5f5">
            <v-row justify="center" align="center">
              <v-col class="d-flex justify-center" cols="auto">
                <v-img :src="imgI3" width="80"></v-img>
              </v-col>
              <v-col class="d-flex justify-center" cols="auto">
                <div class="text-center">
                  <h4>Eu amet fugiat.</h4>
                  <span>Occaecat esse sit quis velit</span>
                </div>
              </v-col>
            </v-row>
          </v-card>
          <v-img height="100%" :src="imgB3" cover />
          <v-card-title>BLOG 3</v-card-title>
          <v-card-subtitle class="text-wrap" style="white-space: normal">
            Todos los articulos que manejamos son calidad premium y de larga
            duracion
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>
<style scoped></style>
