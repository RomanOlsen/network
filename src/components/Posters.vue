<script setup>
import { AppState } from '@/AppState.js';
import { Poster } from '@/models/Poster.js';
import { posterService } from '@/services/PosterService.js';
import { postsService } from '@/services/PostsService.js';
import { Pop } from '@/utils/Pop.js';

import { computed, onMounted } from 'vue';

const poster1 = computed(() => AppState.posters[0])
const poster2 = computed(() => AppState.posters[1])



// defineProps({
//   posterProp: { type: Poster, required: true }
// })

onMounted(() => {
  getPosters()
})

async function getPosters() {
  try {
    await posterService.getPosters()
  }
  catch (error) {
    Pop.error(error);
  }


}

function changePoster(poster) {

  if (poster == 2) {

    document.getElementById('poster1').classList.remove('d-none')
    document.getElementById('poster1-alt').classList.add('d-none')

    document.getElementById('poster2').classList.remove('d-none')
    document.getElementById('poster2-alt').classList.add('d-none')
    return
  }
  document.getElementById('poster1').classList.add('d-none')
  document.getElementById('poster1-alt').classList.remove('d-none')

  document.getElementById('poster2').classList.add('d-none')
  document.getElementById('poster2-alt').classList.remove('d-none')



}

</script>



<template>
  <div v-if="poster1 && poster2">
    <img @click="changePoster(1)" :src="poster1.tall" alt="Ad" class="poster1" id="poster1">

    <img @click="changePoster(1)" :src="poster2.tall" alt="Ad" class="poster2" id="poster2">
    <div class="d-flex justify-content-evenly mt-4">
    <img @click="changePoster(2)" :src="poster1.banner" alt="Ad" class="poster1-alt d-none" id="poster1-alt">
    <img @click="changePoster(2)" :src="poster2.banner" alt="Ad" class="poster2-alt d-none" id="poster2-alt">
  </div>


  </div>
  <div v-else>
    Nice. Ads are off.
  </div>
</template>


<style lang="scss" scoped>
.poster1 {
  // display: flex;
  // height: 100dvh;
  position: absolute;
  top: 50%;
  width: 30dvh;
  left: 2.2dvh;
  z-index: 1;

}

.poster2 {
  // display: flex;
  // height: 100dvh;
  position: absolute;
  top: 50%;
  width: 30dvh;
  //  aspect-ratio: ;
  //  left: 120dvh;
  right: 2.2dvh;
  z-index: 1;
}

.poster1-alternate {
  // position: absolute;
  // top: 50%;
  // width: 10dvh;
  // left: 2.2dvh;
  // z-index: 1;
}
</style>