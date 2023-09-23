<script setup lang="ts">
import { RouterView } from 'vue-router'
import Footer from '@/components/layout/FooterComponent.vue'
import Header from '@/components/layout/HeaderComponent.vue'
</script>

<template>
  <Header />

  <main class="wrapper">
    <RouterView />
  </main>

  <Footer />
</template>
