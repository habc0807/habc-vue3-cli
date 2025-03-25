<template>
  <!-- <div style="width: 100px" @click="add">{{ num }}</div> -->
  <div>indexpage</div>
  <h1>sdssdds</h1>
  <button style="width: 100px; height: 100px" @click="add">{{ num }}</button>
  <p>{{ num }}</p>
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