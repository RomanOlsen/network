<script setup>
import { AppState } from '@/AppState.js';
import { postsService } from '@/services/PostsService.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';

const page = computed(() => AppState.page)
const maxPage = computed(() => AppState.maxPage)

async function changePostPage(params) {
  try {
    await postsService.changePostPage(params)
  }
  catch (error) {
    Pop.error(error);
  }

}
</script>


<template>
  <div class="d-flex justify-content-evenly align-items-center py-5">
    <button :disabled="page < 2" @click="changePostPage(-1)" class="btn btn-outline-light">
      <span class="mdi mdi-arrow-left"> More Recent</span>
    </button>
    <div class="text-center">
      <div>Page</div>
      <h1>{{ page }}</h1>
    </div>
    <button :disabled="page >= maxPage" @click="changePostPage(1)" class="btn btn-outline-light">Less Recent
      <span class="mdi mdi-arrow-right"></span>
    </button>
  </div>
</template>


<style lang="scss" scoped></style>