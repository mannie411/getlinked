<template lang="">
  <section>
    <div class="p-4">
      <div class="container">
        <div class="grid col-2">
          <div><img src="@/assets/images/register.png" alt="" /></div>
          <div class="form-wrapper">
            <h3 style="color: #d434fe">Register</h3>
            <p class="mb-2">
              Be part of this movement!
              <span><img src="@/assets/images/register-img2.png" alt="" srcset="" /></span>
            </p>
            <h4 class="mb-2">CREATE YOUR ACCOUNT</h4>
            <div>
              <form @submit.prevent="onSubmit">
                <div class="grid col-2 gap">
                  <div class="form-group">
                    <label class="label" for="name">Team Name</label>
                    <input class="input" type="text" name="" id="name" />
                  </div>
                  <div class="form-group">
                    <label class="label" for="phone"> Phone Number </label>
                    <input class="input" type="text" name="tel" id="phone" />
                  </div>
                </div>
                <div class="grid col-2 gap">
                  <div class="form-group">
                    <label class="label" for="email">Email</label>
                    <input class="input" type="emai" name="" id="email" />
                  </div>
                  <div class="form-group">
                    <label class="label" for="topic">Project Topic</label>
                    <input class="input" type="text" name="" id="topic" />
                  </div>
                </div>
                <div class="grid col-2 gap">
                  <div class="form-group">
                    <label class="label" for="category">Category</label>
                    <input class="input" type="text" name="" id="category" />
                  </div>
                  <div class="form-group">
                    <label class="label" for="size">Group Size </label>
                    <input class="input" type="text" name="" id="size" />
                  </div>
                </div>
                <p class="mb-2" style="color: #ff26b9; font-style: italic">
                  <i> Please review your registration details before submitting </i>
                </p>
                <div class="mb-3 flex">
                  <label for="agree" class="check" style="margin-right: 0.725rem">
                    <input type="checkbox" name="agree" id="agree" />
                    <span class="checkbox"></span>
                  </label>
                  <p>I agree with the event terms and conditions and privacy policy</p>
                </div>
                <div>
                  <button class="btn primary w-100" type="submit">Register Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <ConfirmModal :isVisible="isShow" @close="closeModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ConfirmModal from './_ConfirmModal.vue'

const isShow = ref<boolean>(false)

const onSubmit = async () => {
  try {
    console.log('Success')
    isShow.value = true
  } catch (error) {
    console.log(error)
  }
}

const closeModal = () => {
  isShow.value = false
}
</script>
