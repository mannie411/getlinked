<template>
  <div class="timeline">
    <template v-for="({ title, content, date }, idx) in data" :key="idx">
      <div class="wrapper">
        <div class="line"></div>
        <div class="body flex justify-evenly align-center gap">
          <div class="content">
            <h3 class="title">{{ title }}</h3>
            <p class="text">{{ content }}</p>
          </div>
          <div class="count flex justify-center align-center">
            <span>{{ idx + 1 }}</span>
          </div>
          <div class="date">{{ date }}</div>
        </div>
      </div>
    </template>
  </div>
</template>
<script setup lang="ts">
import type { TimelineData } from '@/types'
defineProps<{
  data: TimelineData[]
}>()
</script>
