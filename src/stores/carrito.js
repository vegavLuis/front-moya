import { ref } from "vue";
import { defineStore } from "pinia";

export const useCarritoStore = defineStore("carrito", () => {
  const carrito = ref([]);

  const agregar = (item) => {
    const productoExistente = carrito.value.find(
      (producto) => producto._id === item._id
    );
    if (productoExistente) {
      productoExistente.cantidad += 1;
      productoExistente.precioTotal =
        productoExistente.precio * productoExistente.cantidad;
    } else {
      item.cantidad = 1;
      item.precioTotal = item.precio * item.cantidad;
      carrito.value.push(item);
    }
  };

  const disminuir = (item) => {
    const productoExistente = carrito.value.find(
      (producto) => producto._id === item._id
    );
    if (productoExistente && productoExistente.cantidad > 1) {
      productoExistente.cantidad -= 1;
      productoExistente.precioTotal =
        productoExistente.precio * productoExistente.cantidad;
    }
  };

  const aumentar = (item) => {
    const productoExistente = carrito.value.find(
      (producto) => producto._id === item._id
    );
    if (productoExistente) {
      productoExistente.cantidad += 1;
      productoExistente.precioTotal =
        productoExistente.precio * productoExistente.cantidad;
    }
  };

  const eliminar = (item) => {
    carrito.value = carrito.value.filter(
      (producto) => producto._id !== item._id
    );
  };

  return { carrito, agregar, disminuir, aumentar, eliminar };
});
