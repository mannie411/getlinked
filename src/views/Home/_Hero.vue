<template>
  <section id="hero" class="wrapper hero bordered">
    <div class="container">
      <div class="hero-intro">
        <img src="@/assets/images/hero-title-2.svg" alt="" />
      </div>

      <div class="">
        <div class="hero-wrapper grid col-2">
          <div class="hero-content">
            <div>
              <div>
                <img src="@/assets/images/hero-title.svg" alt="" />
              </div>
              <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
              <button class="btn primary">Register</button>
            </div>
            <!-- <div>
              <CountDownTimer />
            </div> -->
          </div>
          <div class="hero-img">
            <img src="@/assets/images/hero-img1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CountDownTimer from '@/components/CountDownTimerComponent.vue'
</script>
