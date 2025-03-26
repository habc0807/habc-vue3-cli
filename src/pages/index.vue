<template>
  <!-- <div style="width: 100px" @click="add">{{ num }}</div> -->
  <div>indexpage</div>
  <hr />
  <button style="width: 100px; height: 100px" @click="add">{{ num }}</button>
  <p>{{ num }}</p>
  <Card />
</template>

<script setup lang="ts">
// import Card from "../components/Card.vue"; // 组件自动导入 不需要引入了
// import { ref } from "vue";
let num = ref(100);
let add = () => {
  console.log(num.value);
  console.log("------");
  num.value++;
};
</script>

<style>
</style>