<script setup>
import { AppState } from '@/AppState.js';
import EditAccountForm from '@/components/EditAccountForm.vue';
import PostCard from '@/components/PostCard.vue';
import PreviousNext from '@/components/Previous&Next.vue';
import { postsService } from '@/services/PostsService.js';
import { profileService } from '@/services/ProfileService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()

const profile = computed(() => AppState.activeProfile)
const profilePost = computed(() => AppState.profilePostPageContent)
const posts = computed(() => AppState.posts)
const account = computed(() => AppState.account)



onMounted(() => {
  viewProfile()
  // getProfilePosts(route.params.id)
}
)

watch(route, () => {
  viewProfile()
})



async function getProfilePosts(params) {
  try {
    await postsService.getProfilePosts(params)
  }
  catch (error) {
    Pop.error(error, 'b');
  }
}

async function viewProfile() {
  try {
    const profileID = route.params.id
    await profileService.viewProfile(profileID)
    getProfilePosts(profileID) // ANCHOR not needed computed function for this, bc of this
  }
  catch (error) {
    Pop.error(error, 'a');
  }
}

</script>
// ANCHOR ads will be its own component thats a col-12. Perhaps 1 ad at top of every page and bottom
// NOTE you don't need ? elvis operator if theres a V-if!!!
// NOTE A tags sometimes just wouldnt work. it seemed to depend on where they are placed.
<template>
  <div class="container">
    <div class="row">

      <div class="col-12">
        <div v-if="profile" class="card mt-2 bg-primary text-light">
          <div class="card-header m-0 p-0">
            <img :src="profile.coverImg" class="cover-image" alt="Cover Image">
          </div>
          <div class="card-body">
            <div class=" d-flex justify-content-between mx-3">
              <div class="d-flex align-items-end icon-group">
                <img :src="profile.picture" class="icon" alt="Cover Image">
                <span v-if="profile.graduated" class="mdi mdi-account-school fs-1"><span
                    class="fs-5">Alumni!</span></span>
                <!-- <span v-else>Student - Not yet graduated</span> -->
              </div>
              <div class="fs-1">
                <a v-if="profile.github" :href="profile.github" target="_blank" class="text-light"
                  title="check out github"><span class="mdi mdi-github"></span>
                </a>
                <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" class="text-light"
                  title="check out linkedin"><span class="mdi mdi-linkedin"></span>
                </a>
                <a v-if="profile.resume" :href="profile.resume" target="_blank" class="text-light"
                  title="check out resume"><span class="mdi mdi-file-account"></span>
                </a>
              </div>

            </div>
            <div class="bio-group text-light">
              <hr>
              <div class="ms-5">
                <h4>{{ profile.class }}</h4>
                <h1 class="fw-bold">{{ profile.name }}</h1>
                <p v-if="profile.bio" class="ms-1 fst-italic">{{ profile.bio }}</p>
                <p v-else class="ms-1 fst-italic">I, {{ profile.name }}, don't have a bio yet, but that's okay.</p>
              </div>

            </div>




          </div>
        </div>
        <h1 v-else> Loading... </h1>
      </div>
      <div v-if="account && account?.id == profile?.id" class="col-12">
        <div class="text-center">
          <EditAccountForm />
        </div>
      </div>


      <!-- ANCHOR unsure if this v-if helps at all -->
      <div>
        <div class="col-12 mt-3" v-for="post in profilePost" :key="post.id">
          <PostCard :post-prop="post" />

        </div>
      </div>
      <div class="col-12">
        <PreviousNext />
      </div>
    </div>
  </div>


</template>


<style lang="scss" scoped>
.cover-image {
  width: 100%;
  // aspect-ratio: 1/1;
  height: 40dvh;
  object-fit: cover;
  // border-radius: %;
}

.icon {
  height: 20dvh;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-width: thick;
  border-color: white;
  border-style: solid;
  background-color: black; // For oslo's image thats not fully solid
  // position: relative;
  // offset-position: 0;
  // top: -12dvh;
}

.icon-group {
  position: relative;
  top: -12dvh;

}

.bio-group {
  position: relative;
  top: -12dvh;

}
</style>