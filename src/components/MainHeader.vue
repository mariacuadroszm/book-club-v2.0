<script setup>
const props = defineProps({
  displayBackBtn: { type: Boolean, default: true },
});
console.log(props.displayBackBtn);
</script>

<template>
  <div class="grid grid-cols-3 w-full">
    <button v-if="props.displayBackBtn" class="w-fit" data-testid="goBackBtn">
      <v-icon name="oi-arrow-left" scale="2.5" fill="white" />
    </button>
    <button class="w-48 justify-self-center col-start-2">
      <img src="./icons/media-monks-logo.svg" alt="Media Monks logo" />
    </button>
    <button class="w-fit justify-self-end">
      <v-icon name="md-logout-round" scale="1.8" fill="white" />
    </button>
  </div>
</template>
