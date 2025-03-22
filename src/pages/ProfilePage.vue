<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';
import { useRoute } from 'vue-router';


// const route = useRoute()

const profile = computed(()=> AppState.activeProfile)

</script>


<template>
<div>Profile page</div>
<div>{{ profile }}</div>
</template>


<style lang="scss" scoped>

</style>