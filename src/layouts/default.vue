<template>
  <main>
    <div class="pt-14 xl:pl-60">
      <div class="bg-white text-base dark:bg-gray-800 dark:text-gray-100">
        <navbar></navbar>
        <side-menu></side-menu>
        <router-view />
        <footer-content></footer-content>
      </div>
    </div>
  </main>
</template>