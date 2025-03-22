<script setup>
import { AppState } from '@/AppState.js';
import { postsService } from '@/services/PostsService.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';

const formData = ref({ // Whats inside is the value
  body: '',
  imgUrl: '',
})

const account = AppState.account

async function postPost() {
  try {
    await postsService.postPost(formData.value)
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div class="card mt-4">
    <div class="card-header">
      <h1 class="fst-italic fw-bold text-light">Share what's happening, {{ account.name }}.</h1>
    </div>

    <form @submit.prevent="postPost()">
      <div class="d-flex align-items-center justify-content-between gap-3 mx-3 mt-3">
        <img class="creator-photo" :src="account.picture" alt="">
        <textarea v-model="formData.body" class="post-body" type="text" maxlength="5000"
          placeholder="What's on your mind?" required></textarea>
      </div>
      <div class="card-footer text-light">
        <div class="d-flex justify-content-between align-items-center">
          <span>Add a daily Quote here</span>
          <input v-model="formData.imgUrl" maxlength="500" type="url" placeholder="Picture Link" class="post-imgLink">
          <button type="submit" class="btn btn-vue">Post</button>
        </div>
      </div>
    </form>
  </div>
</template>


<style lang="scss" scoped>
.post-body {
  width: 90%;
  height: 20dvh
}

.post-imgLink {
  width: 50%;
}

.creator-photo {
  height: 12dvh;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;


}

.card {
  background-color: #7519ff;
}

.card-header {
  // outline: none;
  border: none;
  background-color: rgb(0, 0, 0);
}

.card-footer {
  border: none;
  background-color: #7519ff;
}
</style>