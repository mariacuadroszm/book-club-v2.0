<script setup>
import { computed } from "vue";
import useBooksStore from "../stores/books.js";

const booksStore = useBooksStore();

const props = defineProps({
  book: { type: Object, required: true },
});

const textBtn = computed(() => {
  if (props.book.activeUser && props.book.status === "proposed") {
    return "Voted";
  } else if (!props.book.activeUser && props.book.status === "proposed") {
    return "Vote";
  } else if (props.book.activeUser && props.book.status === "active") {
    return "Joined";
  } else {
    return "Join";
  }
});

const textParticipants = computed(() => {
  return props.book.status === "proposed" ? "Interested" : "Readers";
});

const voteForBook = () => {
  booksStore.voteForBook(props.book.id);
};
</script>

<template>
  <div
    class="h-48 p-4 bg-white rounded-lg flex flex-col justify-between min-w-[270px]"
  >
    <div>
      <h2 class="line-clamp-2" data-testid="title">{{ props.book.title }}</h2>
      <span
        class="text-lg font-medium text-tertiary line-clamp-1"
        data-testid="author"
        >{{ props.book.author }}</span
      >
    </div>
    <div class="flex justify-between">
      <div class="flex items-center">
        <v-icon name="bi-book" scale="3" />
      </div>
      <div class="flex flex-col items-center">
        <span class="text-sm" data-testid="participants">
          {{ props.book.participants }} {{ textParticipants }}</span
        >
        <button
          :class="props.book.activeUser ? 'btn btn__selected' : 'btn'"
          @click="voteForBook"
          data-testid="textBtn"
        >
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
