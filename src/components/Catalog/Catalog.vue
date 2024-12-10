<script setup>
import CatalogItem from "@/components/Catalog/CatalogItem.vue";
import { products} from "@/static.js";
</script>

<template>
  <div class="flex flex-col px-8 pb-6">
    <hr class="border-b-px border-solid"/>
    <div class="text-4xl mt-3 mb-6 text-center">Каталог товаров</div>
    <div class="self-center max-w-[1920px]">
      <div class="flex justify-center flex-wrap gap-4 w-full">
        <CatalogItem v-for="product in products" :key="product.id" :product="product" class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" />
      </div>
    </div>
  </div>
</template>