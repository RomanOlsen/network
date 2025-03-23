<script setup>
import { AppState } from '@/AppState.js';
import { Post } from '@/models/Post.js';
import { postsService } from '@/services/PostsService.js';
import { profileService } from '@/services/ProfileService.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const account = computed(() => AppState.account)


defineProps({
  postProp: { type: Post, required: true }
})

async function likePost(postID) {
  try {
    await postsService.likePost(postID)
    // if (postProp.likes) {

    // }
    // Pop.toast('Liking')
    Pop.toast('Toggling like')
  }
  catch (error) {
    Pop.error(error);
  }
}

async function deletePost(id, body) {

  const confirmation = await Pop.confirm('Are you sure you want to delete this post?', 'Post: ' + body)

  if (!confirmation) {
    return
  }

  try {

    await postsService.deletePost(id)
    Pop.toast('Deleted.')
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
        <div class="d-flex align-items-center">
          <RouterLink :to="{ name: 'Profile Page', params: { id: postProp.creatorId } }">
            <img :src="postProp.creator.picture" class="creator-photo" alt="Creator photo">
          </RouterLink>
          <span class="ps-3">{{ postProp.creator.name }}</span>
        </div>
        <div class="d-flex align-items-center">
          <span>Posted: {{ postProp.createdAt.toLocaleDateString() }}</span>
          <button @click="deletePost(postProp.id, postProp.body)" v-if="account?.id == postProp.creatorId"
            class="btn btn-outline-danger ms-3">Delete post</button>
          <!-- Roman dont forget the question mark -->

        </div>
      </div>
    </div>
    <div class="card-body text-center">
      <p>{{ postProp.body }}</p>
      <img class="post-photo" :src="postProp.imgUrl" alt="Image">
    </div>
    <div class="card-footer bg-light">

      <div class="text-center">
        <button v-if="account" @click="likePost(postProp.id)" class="btn btn-pink px-5 rounded"> <span
            class="mdi mdi-heart"></span> {{
              postProp.likes.length }} likes
        </button>
        <span v-else class="fw-bold fs-3">Log in to like this post!</span>
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