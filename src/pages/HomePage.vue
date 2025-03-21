<script setup>
import { AppState } from '@/AppState.js';
import PostCard from '@/components/PostCard.vue';
import { postsService } from '@/services/PostsService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


const posts = computed(() => AppState.posts)

onMounted(() => {
  getPosts()
})

async function getPosts() {
  try {
    await postsService.getPosts()
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>

<template>
  <div v-for="post in posts" :key="post.id">
    <PostCard :post-prop="post" />
  </div>

  <div>

  </div>
</template>

<style scoped lang="scss"></style>
