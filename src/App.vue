<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import Posters from './components/Posters.vue';

// const posters = computed(()=> AppState.posters)

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <Posters />
    <RouterView />
  </main>
  <!-- <footer class="text-center">
    Made with <i class="mdi mdi-heart text-pink"></i> by Roman
  </footer> -->
</template>

<style lang="scss"></style>
