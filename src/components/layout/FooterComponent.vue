<template>
  <footer style="background-color: #100b20">
    <div class="container p-4">
      <div class="grid col-2 mb-3">
        <div>
          <div class="mb-2">
            <RouterLink to="/">
              <img src="@/assets/images/logo.svg" alt="" />
            </RouterLink>
          </div>
          <p class="mb-2" style="max-width: 70%">
            Getlinked Tech Hackathon is a technology innovation program established by a group of
            organizations with the aim of showcasing young and talented individuals in the field of
            technology
          </p>
          <div>
            <nav>
              <ul class="flex" style="gap: 0.75rem">
                <li>Terms of Use</li>
                <li><span style="color: #d434fe">|</span></li>
                <li>Privacy Policy</li>
              </ul>
            </nav>
          </div>
        </div>

        <div class="grid col-2">
          <div>
            <h6 style="color: #d434fe">Useful Links</h6>
            <nav class="nav mb-2">
              <ul class="nav-items">
                <template v-for="({ path, label }, idx) in footerLinks" :key="idx">
                  <li class="nav-item" :class="{ active: path === rPath ? 'active' : '' }">
                    <RouterLink :to="path">{{ label }}</RouterLink>
                  </li>
                </template>
              </ul>
            </nav>

            <p class="flex align-center justify-between" style="padding-right: 2rem">
              <span style="color: #d434fe">Follow us </span>
              <span>
                <img src="@/assets/images/insta.svg" alt="" />
              </span>
              <span>
                <img src="@/assets/images/x.svg" alt="" />
              </span>
              <span>
                <img src="@/assets/images/fb.svg" alt="" />
              </span>
              <span>
                <img src="@/assets/images/linkd.svg" alt="" />
              </span>
            </p>
          </div>
          <div>
            <h6 style="color: #d434fe">Contact Us</h6>
            <div>
              <p class="mb-2"><img src="@/assets/images/phone1.svg" alt="" /> +234 679 81819</p>
              <p class="mb-2">
                <img src="@/assets/images/map-pin.svg" alt="" /> 27,Alara Street Yaba 100012 Lagos
                State
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="text-center">All rights reserved. © getlinked Ltd.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { footerLinks } from '@/Contants'
import { ref, watch, type Ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const rPath = ref()
const route = useRoute()

watch(
  () => route.fullPath,
  (path) => {
    rPath.value = path
  }
)
</script>
