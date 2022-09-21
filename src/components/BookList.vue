<script setup>
import BookCard from "../components/BookCard.vue";

const props = defineProps({
  isCarousel: { type: Boolean, required: true },
  books: { type: Array, required: true },
});
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
    <div
      :class="props.isCarousel ? 'carouselLayout' : 'listLayout'"
      data-testid="listContainer"
    >
      <BookCard
        v-for="book in props.books"
        :key="book.id"
        :book="book"
      ></BookCard>
    </div>
    <div class="mt-4">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>
