<script setup>
import { Post } from '@/models/Post.js';


defineProps({
  postProp: { type: Post, required: true }
})

</script>


<template>
  <div>Card</div>
  {{ postProp.body }}
</template>


<style lang="scss" scoped></style>