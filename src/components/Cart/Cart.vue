<script setup>
import { useCartItems } from "@/cartItems.js";
import CartItem from "@/components/Cart/CartItem.vue";
import { computed, ref } from "vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  }
})

const emits = defineEmits({
  close: []
})

const { cartItems } = useCartItems()

const totalPrice = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.count, 0))
const isTooltip = ref(false)
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
    <div class="bg-white rounded-lg p-6 w-11/12 h-[80%] flex flex-col justify-between">
      <div>
        <div class="flex justify-between items-center">
          <h2 class="text-5xl">Корзина</h2>
            <button @click="emits('close')">
              <img src="../../../public/close.png" alt="cross" class="size-4"/>
            </button>
        </div>
        <hr class="border-b-px border-solid my-6"/>
        <div class="flex flex-col gap-y-3">
          <CartItem v-for="item in cartItems" :key="item.id" :cartItem="item" />
        </div>
        <div v-if="!cartItems.length"  class="bg-white rounded-lg p-6 w-11/12 h-[80%] flex flex-col justify-between">
          <span class="text-4xl text-center">В корзине ничего нет!</span>
          <span class="text-3xl text-center">Добавьте товары в корзину чтобы они здесь появились.</span>
        </div>
      </div>
      <div>
        <hr class="border-b-px border-solid my-6"/>
        <div class="relative flex justify-between items-center">
          <span class="text-3xl flex gap-x-2">
            Итоговая сумма: <p class="font-bold">{{ totalPrice }}₽</p>
          </span>
          <button
            @mouseover="isTooltip = true"
            @mouseleave="isTooltip = false"
            class="cursor-not-allowed border-[1px] rounded-xl text-3xl h-11 w-[232px] text-gray-500 bg-gray-200"
          >
            Заказать
          </button>
          <div v-if="isTooltip" class="transition-all cursor-not-allowed absolute right-0 -top-16 bg-white shadow-md rounded-xl p-4 text-3xl">
            Временно недоступно!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
