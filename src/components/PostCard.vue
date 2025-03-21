<script setup>
import { Post } from '@/models/Post.js';


defineProps({
  postProp: { type: Post, required: true }
})

</script>


<template>
  <div class="card">
    <div class="card-header">
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <img :src="postProp.Creator.picture" class="creator-photo" alt="Creator photo">
          <span>{{ postProp.Creator.name }}</span>
        </div>
        <span>Posted: {{ postProp.createdAt.toLocaleDateString() }}</span>
      </div>
    </div>
    <div class="card-body">
      <p>{{ postProp.body }}</p>
      <img :src="postProp.ImgUrl" alt="Image">
    </div>
    <div class="card-footer">

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
</style>