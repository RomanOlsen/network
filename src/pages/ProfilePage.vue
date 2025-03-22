<script setup>
import { AppState } from '@/AppState.js';
import { profileService } from '@/services/ProfileService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()

const profile = computed(() => AppState.activeProfile)

onMounted(() => viewProfile())


async function viewProfile() {
  try {
    const profileID = route.params.id
    await profileService.viewProfile(profileID)
  }
  catch (error) {
    Pop.error(error);
  }
}

</script>


<template>
  <div>Profile page</div>
  <div>{{ profile?.name }}</div>
</template>


<style lang="scss" scoped></style>