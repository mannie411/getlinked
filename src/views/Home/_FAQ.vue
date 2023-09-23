<template>
  <section id="faq" class="wrapper">
    <div class="bordered-bottom p-4">
      <div class="container">
        <div class="grid col-2">
          <div class="mx-auto">
            <h3 class="heading-3">
              Frequently Ask
              <br />
              <span> Question </span>
            </h3>
            <p class="faq-sub">
              We got answers to the questions that you might <br />
              want to ask about
              <span> getlinked Hackathon 1.0 </span>
            </p>
            <div>
              <Accordion :data="faqs" />
            </div>
          </div>
          <div>
            <img src="@/assets/images/faq-img1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Accordion from '@/components/AccordionComponent.vue'
import type { AccordionData } from '@/types'

const faqs: AccordionData[] = [
  {
    title: 'Can I work on a project I started before the hackathon?',
    content: 'Can I work on a project I started before the hackathon?'
  },
  {
    title: 'What happens if I need help during the hackathon?',
    content: 'What happens if I need help during the hackathon?'
  },
  {
    title: "What happens if I don't have an idea for a project?",
    content: "What happens if I don't have an idea for a project?"
  },
  {
    title: 'Can I join a team or do I have to come with one?',
    content: 'Can I join a team or do I have to come with one?'
  },
  {
    title: 'What happens after the hackathon ends',
    content: 'What happens after the hackathon ends'
  },
  {
    title: 'Can I work on a project I started before the hackathon?',
    content: 'Can I work on a project I started before the hackathon?'
  }
]
</script>
