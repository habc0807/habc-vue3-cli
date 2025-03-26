<template>
  <p>home</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
let num = ref(100);
let add = () => {
  console.log(num.value);
  console.log("------");
  num.value++;
};
</script>

<style>
</style>