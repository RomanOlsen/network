<script setup>
import { AppState } from '@/AppState.js';
import PostCard from '@/components/PostCard.vue';
import PostForm from '@/components/PostForm.vue';
import PreviousNext from '@/components/Previous&Next.vue';
import { postsService } from '@/services/PostsService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const account = computed(() => AppState.account)
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
  <div class="container">
    <div class="row">
      <div class="col-12" v-if="account">
        <PostForm />
      </div>
      <div class="col-12" v-else>
        <div class="text-center fs-2 mt-4">
          Instagram is better when you <span class="text-indigo fw-bold">log in.</span> Log in today to create your own
          posts!
        </div>
      </div>
      <div class="col-12 mt-5" v-for="post in posts" :key="post.id">
        <PostCard :post-prop="post" />
      </div>
      <div class="col-12">
        <PreviousNext />
      </div>
    </div>
  </div>

  <div>

  </div>
</template>

<style scoped lang="scss"></style>
