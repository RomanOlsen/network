<script setup>
import { Post } from '@/models/Post.js';
import { postsService } from '@/services/PostsService.js';
import { Pop } from '@/utils/Pop.js';


defineProps({
  postProp: { type: Post, required: true }
})

async function likePost(postID) {
  try {
    await postsService.likePost(postID)
    Pop.success('Liked!')
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div class="card bg-light text-dark shadow-lg">
    <div class="card-header bg-light">
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <img :src="postProp.Creator.picture" class="creator-photo" alt="Creator photo">
          <span class="ps-3">{{ postProp.Creator.name }}</span>
        </div>
        <span>Posted: {{ postProp.createdAt.toLocaleDateString() }}</span>
      </div>
    </div>
    <div class="card-body text-center">
      <p>{{ postProp.body }}</p>
      <img class="post-photo" :src="postProp.ImgUrl" alt="Image">
      <div>{{ postProp.Likes.length }} likes</div>
    </div>
    <div class="card-footer bg-light">

      <div class="text-center">
        <button @click="likePost(postProp.id)" class="btn btn-pink px-5 rounded">Like <span class="mdi mdi-heart"></span></button>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.creator-photo {
  height: 8dvh;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;


}

.post-photo {
  // height: 10dvh;
  width: 100%;
  aspect-ratio: 2/1;
  object-fit: contain; // ANCHOR or cover
  border-radius: 0.5%;
  // margin-bottom: 0;
}

.card-header {
  // outline: none;
  border: none;
}

.card-footer {
  border: none;
}
</style>