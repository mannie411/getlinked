<template>
  <section class="wrapper" id="timeline">
    <div class="p-4">
      <div class="container">
        <div class="my-auto">
          <h3 class="heading-3 text-center">Timeline</h3>
          <p class="text-center">
            Here is the breakdown of the time we anticipate <br />
            using for the upcoming event.
          </p>
        </div>
        <TimeLine :data="timelineData" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TimeLine from '@/components/TimeLine.vue'
import type { TimelineData } from '@/types'

const timelineData: TimelineData[] = [
  {
    title: 'Hackathon Announcement',
    content:
      'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
    date: 'November 18, 2023'
  },
  {
    title: 'Teams Registration begins',
    content:
      'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
    date: 'November 18, 2023'
  },
  {
    title: 'Teams Registration ends',
    content: 'Interested Participants are no longer Allowed to register',
    date: 'November 18, 2023'
  },
  {
    title: 'Announcement of the accepted teams and ideas',
    content:
      'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
    date: 'November 18, 2023'
  },
  {
    title: 'Getlinked Hackathon 1.0 Offically Begins',
    content: 'Accepted teams can now proceed to build their ground breaking skill driven solutions',
    date: 'November 18, 2023'
  },
  {
    title: 'Demo Day',
    content:
      'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day',
    date: 'November 18, 2023'
  }
]
</script>
