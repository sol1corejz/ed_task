<script setup>
import {useCartItems} from "@/cartItems.js";
import {computed} from "vue";

const props = defineProps({
  cartItem: {
    required: true
  },
})

const { addToCart, removeFromCart, cartItems } = useCartItems()

const cartItemCount = computed(() => cartItems.value.find(item => item.id === props.cartItem.id).count)
const cartItemPrice = computed(() => {
  const item = cartItems.value.find(item => item.id === props.cartItem.id)
  return item.price * item.count
})
</script>

<template>
  <div class="w-full flex">
    <div class="flex gap-x-3">
      <img :src="cartItem.img" alt="cartItem" class="w-24 h-24 rounded-md" />
      <span class="text-3xl w-fit flex items-center justify-center">
        {{cartItem.title}}
      </span>
    </div>
    <div class="ml-auto flex items-center justify-center gap-x-6">
      <div class="flex gap-x-3">
        <p class="font bold text-3xl">{{cartItemPrice}}₽</p>
        <button
          @click="removeFromCart(props.cartItem)"
          class="size-11 cursor-pointer hover:bg-red-500 hover:border-red-500 hover:text-white transition-all border-[1px] border-solid border-gray-500 rounded-xl text-xl flex items-center justify-center"
        >
          -
        </button>
        <p class="text-xl self-center min-w-6">{{cartItemCount}}</p>
        <button
          @click="addToCart(props.cartItem)"
          class="size-11 cursor-pointer hover:bg-green-500 hover:border-green-500 hover:text-white transition-all border-[1px] border-solid border-gray-500 rounded-xl text-xl flex items-center justify-center"
        >
          +
        </button>
      </div>
      <span @click="removeFromCart(props.cartItem, true)" class="cursor-pointer text-2xl hover:text-red-500">Удалить</span>
    </div>
  </div>
</template>

<style scoped>

</style>