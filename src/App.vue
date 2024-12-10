<script setup>
import { ref, onMounted } from "vue";
import { Header, Catalog, Cart } from "@/components";
import {useCartItems} from "@/cartItems.js";

const { setCartItems } = useCartItems()

const isCartOpen = ref(false)

onMounted(() => {
  setCartItems()
})
</script>

<template>
  <Header @openCart="isCartOpen = true"/>
  <Catalog/>
  <Cart :isOpen="isCartOpen" @close="isCartOpen = false"/>
</template>