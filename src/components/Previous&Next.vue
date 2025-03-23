<script setup>
import { AppState } from '@/AppState.js';
import { postsService } from '@/services/PostsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const page = computed(() => AppState.page)
const maxPage = computed(() => AppState.maxPage)
const route = useRoute()

async function changePostPage(params) {
  if (route.name == 'Profile Page') {
    logger.log(`Changing profile post's page number`)
    try {
      await postsService.changeProfilePostPage(params)

    }
    catch (error) {
      Pop.error(error);
    }
    return
  }
  try {

    await postsService.changePostPage(params)
  }
  catch (error) {
    Pop.error(error);
  }


}
</script>

// @click="if (route.params) {
changePostPage(-1)
} else
<template>
  <div class="d-flex justify-content-evenly align-items-center py-5">
    <button :disabled="page < 2" @click="
      changePostPage(-1)" class="btn btn-outline-light">
      <span class="mdi mdi-arrow-left"> More Recent</span>
    </button>
    <div class="text-center">
      <div>Page</div>
      <h1>{{ page }} of {{ maxPage }}</h1>
    </div>
    <button :disabled="page >= maxPage" @click="changePostPage(1)" class="btn btn-outline-light">Less Recent
      <span class="mdi mdi-arrow-right"></span>
    </button>
  </div>
</template>


<style lang="scss" scoped></style>