<script setup>
import { computed } from "vue";

const props = defineProps(["book"]);

const textBtn = computed(() => {
  return props.book.activeUser ? "Voted" : "Vote";
});
</script>

<template>
  <div
    class="h-48 p-4 bg-white rounded-lg flex flex-col justify-between min-w-[270px]"
  >
    <div>
      <h2 class="line-clamp-2">{{ props.book.title }}</h2>
      <span class="text-lg font-medium text-tertiary line-clamp-1">{{
        props.book.author
      }}</span>
    </div>
    <div class="flex justify-between">
      <div class="flex items-center">
        <v-icon name="bi-book" scale="3" />
      </div>
      <div class="flex flex-col items-center">
        <span class="text-sm"> {{ props.book.participants }} Interested</span>
        <button :class="props.book.activeUser ? 'btn btn__selected' : 'btn'">
          {{ textBtn }}
          <v-icon
            :name="props.book.activeUser ? 'hi-solid-check' : 'hi-solid-plus'"
            scale="0.8"
            class="icon"
          />
        </button>
      </div>
    </div>
  </div>
</template>
