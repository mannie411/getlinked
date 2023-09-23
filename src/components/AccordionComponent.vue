<template>
  <div class="accordion">
    <template v-for="({ title, content }, idx) in data" :key="idx">
      <div class="accordion-body">
        <div class="accordion-title flex justify-between">
          <h4 class="title">{{ title }}</h4>
          <span class="a-open" v-if="!isActive" @click="toogle(idx)">+</span>
          <span class="a-close" v-if="isActive" @click="toogle(idx)">-</span>
        </div>
        <transition>
          <div class="accordion-content" v-if="isActive">
            {{ content }}
          </div>
        </transition>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { AccordionData } from '@/types'
import { ref } from 'vue'
defineProps<{
  data: AccordionData[]
}>()
const isActive = ref<boolean>(false)
const id = ref<number | number>(-1)

const toogle = (idx: number) => {
  isActive.value = !isActive.value
  id.value = idx
}
</script>
