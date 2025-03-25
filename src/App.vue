<template>
  <button @click="user.add()">{{ user.count }}</button>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/use";
const user = useUserStore();
</script>