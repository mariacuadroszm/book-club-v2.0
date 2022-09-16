<script setup>
import BookCard from "../components/BookCard.vue";
import mockedBooks from "../assets/data.json";
import { ref } from "vue";

const books = ref(mockedBooks);
const isCarousel = ref(true);
</script>

<template>
  <div>
    <div>
      <h1 class="text-white mb-1.5">
        <slot name="title"></slot>
      </h1>
      <span class="text-white inline-block mb-4"
        ><slot name="description"></slot
      ></span>
    </div>
    <div :class="isCarousel ? 'carouselLayout' : 'listLayout'">
      <BookCard v-for="book in books" :key="book.id" :book="book"></BookCard>
    </div>
    <div class="mt-4">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>
