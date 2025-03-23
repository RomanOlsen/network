<script setup>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import EditAccountForm from '@/components/EditAccountForm.vue';

const account = computed(() => AppState.account)

</script>

<template>
  <div class="about text-center">
    <div v-if="account">
      <h1>Your Account Stats <span class="mdi mdi-account"></span></h1>
      <hr>
      <div class="mt-4">
        <h2>Name:
          <span v-if="account.name">{{ account.name }}</span>
          <span v-else>No bio yet</span>
        </h2>
        <div>Profile Photo:
          <a :href="account.picture" v-if="account.picture">here</a>
          <span v-else>None specified</span>
        </div>
        <div>Cover Photo:
          <a :href="account.coverImg" v-if="account.coverImg">here</a>
          <span v-else>None specified</span>
        </div>
        <div>Bio:
          <span v-if="account.bio">{{ account.bio }}</span>
          <span v-else>No bio yet</span>
        </div>
        <div>E-mail:
          <span v-if="account.email">{{ account.email }}</span>
          <p v-else>None specified</p>
        </div>
        <div>GitHub:
          <a :href="account.github" v-if="account.github">{{ account.github }}</a>
          <span v-else>None specified 😔</span>
        </div>
        <div>LinkedIn:
          <a :href="account.linkedin" v-if="account.linkedin">{{ account.linkedin }}</a>
          <span v-else>None specified (fair enough)</span>
        </div>
        <div>Resume:
          <a :href="account.resume" v-if="account.resume">{{ account.resume }}</a>
          <span v-else>None (really!?)</span>
        </div>
        <div>Graduated:
          <span v-if="account.graduated">Yes!</span>
          <span v-else>No (how sad)</span>
        </div>
        <div>Class:
          <span v-if="account.class">{{ account.class }}</span>
          <span v-else>None specified</span>
        </div>
        <div>Created At:
          <span v-if="account.createdAt">{{ account.createdAt.toLocaleDateString() }}</span>
          <span v-else>None specified</span>
        </div>
        <div>Last Updated:
          <span v-if="account.updatedAt">{{ account.updatedAt.toLocaleString() }}</span>
          <span v-else>None specified</span>
        </div>

      </div>

      <div class="container">
        <div class="row">
          <div class="col-12">

            <EditAccountForm />
          </div>
        </div>
      </div>






    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
img {
  max-width: 100px;
}
</style>
