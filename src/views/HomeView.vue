<script setup>
import MainHeader from "../components/MainHeader.vue";
import BookList from "../components/BookList.vue";
import useBooksStore from "../stores/books.js";

const booksStore = useBooksStore();
</script>

<template>
  <div class="p-4">
    <header class="mb-4">
      <MainHeader></MainHeader>
    </header>

    <main>
      <section>
        <BookList
          :is-caroulsel="true"
          :books="booksStore.findBooksByStatus('proposed', 5)"
        >
          <template v-slot:title>Proposed books</template>
          <template v-slot:description
            >Vote for the books you want to read</template
          >
          <template v-slot:buttons>
            <button class="btn btn__selected">Show All</button>
            <button class="btn btn__white ml-2">
              Propose a book
              <v-icon
                name="hi-solid-arrow-narrow-right"
                class="arrow-right-icon"
              />
            </button>
          </template>
        </BookList>
      </section>

      <section class="mt-6">
        <BookList
          :is-caroulsel="true"
          :books="booksStore.findBooksByStatus('active', 5)"
        >
          <template v-slot:title>Active clubs</template>
          <template v-slot:description
            >Find active book clubs and their members</template
          >
          <template v-slot:buttons>
            <button class="btn btn__selected">Show All</button>
          </template>
        </BookList>
      </section>
    </main>
  </div>
</template>
