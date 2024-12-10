<script setup>
import {useCartItems} from "@/cartItems.js";

const emits = defineEmits({
  openCart: [],
})

const { cartItems } = useCartItems()
</script>

<template>
  <header class="px-8 py-6 flex justify-between">
    <span class="text-5xl cursor-pointer" >Товары ручной работы</span>
    <div @click="emits('openCart')" class="relative flex gap-x-2 cursor-pointer">
      <span v-show="!!cartItems.length" class="absolute left-4 text-xl size-6 rounded-full bg-red-600 text-white flex items-center justify-center">{{cartItems.length}}</span>
      <img src="../../public/carts.png" alt="cart" class="self-center size-8"/>
      <span class="text-4xl self-center">Корзина</span>
    </div>
  </header>
</template>

<style scoped>

</style>