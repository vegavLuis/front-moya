import { ref, watch } from "vue";
import { defineStore } from "pinia";

export const useCarritoStore = defineStore("carrito", () => {
  const carrito = ref(
    JSON.parse(localStorage.getItem("carrito")) || []
  );
  
  const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito.value));
  };

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
    guardarCarrito();
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
    guardarCarrito();
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
    guardarCarrito();
  };

  const eliminar = (item) => {
    carrito.value = carrito.value.filter(
      (producto) => producto._id !== item._id
    );
    guardarCarrito();
  };

  watch(carrito, guardarCarrito, { deep: true });

  return { carrito, agregar, disminuir, aumentar, eliminar };
});
