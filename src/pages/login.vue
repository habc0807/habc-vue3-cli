<template>
  <h1>login page</h1>
</template>

<script setup lang="ts">
import { ref } from "vue";

let num = ref(0);
let add = () => {
  num.value++;
};
</script>
<style>
</style>