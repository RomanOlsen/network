<script setup>
import { AppState } from '@/AppState.js';
import PostCard from '@/components/PostCard.vue';
import PreviousNext from '@/components/Previous&Next.vue';
import { postsService } from '@/services/PostsService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

// const route = useRoute()
const searchData = ref('')
const posts = computed(() => AppState.posts)
const pages = computed(() => AppState.page)

onMounted(() => {
  AppState.posts = []
  AppState.page = 0
})

async function search() {
  try {
    // const query = route.query
    await postsService.search(searchData.value)
  }
  catch (error) {
    Pop.error(error);
  }
}


</script>

<template>

  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Search Posts</h1>
        <div>
          <form @submit.prevent="search()">
            <input v-model="searchData" class="search-bar fs-4" type="text" required>
            <div class="text-center"><button type="submit"
                class="btn btn-success rounded-pill mt-2 px-5 fs-3">Go</button></div>

          </form>

        </div>
      </div>
      <div class="col-12 mt-3" v-for="post in posts" :key="post.id">
        <PostCard :post-prop="post" />

      </div>
      <div class="col-12" v-if="pages != 0">
        <PreviousNext />
      </div>

    </div>
  </div>




</template>

<style scoped lang="scss">
.search-bar {
  width: 100%;
}
</style>