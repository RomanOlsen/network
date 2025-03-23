<script setup>
import { AppState } from '@/AppState.js';
import { accountService } from '@/services/AccountService.js';
import { formService } from '@/services/FormService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';

const account = AppState.account

const formData = ref({ // Whats inside is the value
  // email: account.email,
  name: account.name ?? '',
  picture: account.picture ?? '',
  bio: account.bio ?? '',
  coverImg: account.coverImg ?? '',
  github: account.github ?? '',
  linkedin: account.linkedin ?? '',
  resume: account.resume ?? '',
  class: account.class ?? '',
  graduated: account.graduated ?? '', // null?
})

onMounted(() => {
  //  prefillForm() // is just a null check which makes the ref above not break
})

async function updateAccount() {
  try {
    await accountService.updateAccount(formData.value)
    Pop.success('Updated!')
  }
  catch (error) {
    Pop.error(error);
  }
}

// function prefillForm() {
//   formService.prefillForm()
// }
</script>


<template>

  <div class="card mt-4 mb-3">
    <div class="card-header">
      <h1 class="fst-italic fw-bold text-light">Edit Account Info!</h1>
    </div>

    <form @submit.prevent="updateAccount()">

      <div>Name</div>
      <input name="name" v-model="formData.name" maxlength="100" type="text" placeholder="Update Your Name"
        class="post-imgLink mb-2">
      <div>Bio</div>
      <div class="d-flex align-items-center justify-content-center gap-3 mx-3">
        <!-- <img class="creator-photo" :src="account.picture" alt=""> -->

        <textarea v-model="formData.bio" class="post-body" type="text" maxlength="1000"
          placeholder="Your lovely bio"></textarea>

      </div>
      <div class="card-footer text-light">


        <hr>
        <!-- <div class="text-center">Picture and Cover Image</div> -->
        <div class="d-flex justify-content-evenly align-items-center">
          <div>
            <div>Picture</div>
            <input v-model="formData.picture" maxlength="500" type="url" placeholder="Picture Link"
              class="picture-link">
          </div>
          <div>
            <div>Cover</div>
            <input v-model="formData.coverImg" maxlength="500" type="url" placeholder="Cover Image Link"
              class="picture-link">
          </div>
        </div>
        <hr>
        <div class="d-flex justify-content-evenly align-items-center">
          <div>
            <div>GitHub</div>
            <input v-model="formData.github" maxlength="500" type="url" placeholder="GitHub" class="picture-link">
          </div>
          <div>
            <div>LinkedIn</div>
            <input v-model="formData.linkedin" maxlength="500" type="url" placeholder="LinkedIn" class="picture-link">
          </div>
          <div>
            <div>Resume</div>
            <input v-model="formData.resume" maxlength="500" type="url" placeholder="Your Resume" class="picture-link">
          </div>





        </div>
        <hr>
        <div class="d-flex justify-content-evenly align-items-center">
          <div class="d-flex align-items-center gap-5">
            <div>
              <div>Class Year</div>
              <input v-model="formData.class" maxlength="100" type="text" placeholder="Class Year" class="picture-link">
            </div>
            <div>
              <label class="text-center" for="graduated">Did you graduate?</label>
              <input name="graduated" v-model="formData.graduated" type="checkbox" placeholder="Did you graduate"
                class="post-imgLink">
            </div>
          </div>
          <button type="submit" class="btn btn-vue fs-5 fw-bold">Update</button>

        </div>
      </div>
    </form>
  </div>

</template>


<style lang="scss" scoped>
.post-body {
  width: 90%;
  height: 20dvh
}

.post-imgLink {
  width: 25%;
}

.picture-link {
  width: 100%;
}

.creator-photo {
  height: 12dvh;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;


}

.card {
  background-color: #7519ff;
}

.card-header {
  // outline: none;
  border: none;
  background-color: rgb(0, 0, 0);
}

.card-footer {
  border: none;
  background-color: #7519ff;
}
</style>