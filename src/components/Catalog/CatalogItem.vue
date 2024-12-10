<script setup>
import {useCartItems} from "@/cartItems.js";
import {computed} from "vue";

const props = defineProps({
  product: {
    required: true
  },
})

const { addToCart, removeFromCart, cartItems } = useCartItems()

const isInCart = computed(() => !!cartItems.value.find(item => item.id === props.product.id))
const cartCount = computed(() => cartItems.value.find(item => item.id === props.product.id).count)

const toggleCartItem = () => {
  if(isInCart.value) {
    removeFromCart(props.product)
    return
  }

  addToCart(props.product)
}

</script>

<template>
  <div class="flex xl:max-w-[332px] lg:max-w-[309px] md:w-[344px] sm:w-full items-center justify-center flex-col gap-y-2 h-[520px]">
    <div class="w-64 h-64 overflow-hidden rounded-lg">
      <img :src="product.img" alt="product" class="w-full h-full object-cover">
    </div>
    <span class="text-xl w-64 text-center">
      {{product.title}}
    </span>
    <span class="text-md text-center w-64">
      {{product.description}}
    </span>
    <span class="text-xl text-center w-64">
      {{product.price}}₽
    </span>
    <button
      v-if="!isInCart"
      @click="toggleCartItem"
      class="cursor-pointer text-xl shadow-md text-white bg-green-500 rounded-3xl h-11 w-[232px] "
    >
      В корзину
    </button>
    <div v-else class="px-8 flex justify-between w-[232px]">
      <button
        @click="removeFromCart(props.product)"
        class="size-11 cursor-pointer hover:bg-red-500 hover:border-red-500 hover:text-white transition-all border-[1px] border-solid border-gray-500 rounded-xl text-xl flex items-center justify-center"
      >
        -
      </button>
      <p class="text-xl self-center">{{cartCount}}</p>
      <button
        @click="addToCart(props.product)"
        class="size-11 cursor-pointer hover:bg-green-500 hover:border-green-500 hover:text-white transition-all border-[1px] border-solid border-gray-500 rounded-xl text-xl flex items-center justify-center"
      >
        +
      </button>
    </div>
  </div>
</template>