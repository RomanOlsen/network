<script setup>
import { Post } from '@/models/Post.js';


defineProps({
  postProp: { type: Post, required: true }
})

</script>


<template>
  <div>Card</div>
</template>


<style lang="scss" scoped></style>