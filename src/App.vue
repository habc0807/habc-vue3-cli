<template>
  <button @click="user.add()">{{ user.count }}</button>
  <i class="i-ic-baseline-edit p-3"></i>
  <button
    class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer"
  >
    Uno Aviabale
  </button>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/use";
const user = useUserStore();
</script>