<template lang="">
  <div class="modal" :class="{ visible: isVisible }">
    <div class="confirm-modal">
      <div class="img">
        <img
          alt="Success Image"
          class="logo"
          src="@/assets/images/success.png"
          width="125"
          height="125"
        />
      </div>

      <div>
        <h6>Congratulations you have successfully Registered!</h6>
        <p>
          Yes, it was easy and you did it!
          <br />
          check your mail box for next steps.
          <span><img src="@/assets/images/smiley.png" alt="" /></span>
        </p>
        <button class="btn primary" @click="$emit('close')">Back</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { isVisible } = defineProps<{
  isVisible: boolean
}>()
</script>
