<script setup>
import { state, transport, toggleLoud } from "../use/state.js";
import { notes } from "../use/notes.js";
const { play, pause, stop } = transport
</script>

<template lang="pug">
section.flex.items-center.justify-between.p-4.gap-4
  a.flex.text-white.no-underline.items-center.gap-2(href="https://chromatone.center/" target="_blank")
    img.h-8(src="/logo.svg")
    .font-bold Chromatone
  .title JAM SESSION IN {{ notes[state.root] }} {{state.scale.toUpperCase()}}
  .control
    button(@click="stop()")
      .i-fa-stop
    button(@click="pause()")
      .i-fa-pause
    button(@click="play()")
      .i-fa-play
    button(@click="toggleLoud()")
      .i-fa-volume-up(v-if="state.loud")
      .i-fa-volume-off(v-else)
</template>



<style scoped>
.title {
  padding-right: var(--button-pad);
  font-weight: bold;
}
</style>