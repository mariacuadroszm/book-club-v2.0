<script setup>
import { ref } from "vue";

let isUserInClub = ref(false);
</script>

<template>
  <div class="main-container">
    <div
      class="card-container h-48 p-4 bg-white rounded-lg flex flex-col justify-between"
    >
      <div class="book-info">
        <h2 class="book-info__title line-clamp-2">Lo que no tiene nombre</h2>
        <span class="book-info__author text-lg font-medium text-tertiary line-clamp-1"
          >Piedad Bonnet</span
        >
      </div>
      <div class="book-footer-container flex justify-between">
        <div class="book-footer__icon flex items-center">
          <v-icon name="bi-book" scale="3" />
        </div>
        <div class="book-footer__votes flex flex-col items-center">
          <span class="book-fotter__votes--count text-sm">4 Interested</span>
          <button
            class="book-fotter__votes--btn"
            :class="isUserInClub ? 'btn btn__selected' : 'btn'"
          >
            Vote
            <v-icon
              :name="isUserInClub ? 'hi-solid-check' : 'hi-solid-plus'"
              scale="0.8"
              class="icon"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
