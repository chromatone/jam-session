<template lang="pug">
section.flex.items-center.justify-center.p-4
  .title JAM SESSION IN {{ notes[state.root] }}
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
  .spacer
</template>

<script>
import { state, transport, toggleLoud } from "../use/state.js";
import { notes } from "../use/notes.js";
export default {
  methods: {},
  setup() {
    return {
      state,
      notes,
      toggleLoud,
      ...transport,
    };
  },
};
</script>

<style scoped>
.title {
  padding-right: var(--button-pad);
  font-weight: bold;
}
</style>