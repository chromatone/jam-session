<template lang="pug">
section
  .title JAM SESSION IN {{ notes[state.root] }}
  .control
    button(@click="stop()")
      fa-stop
    button(@click="pause()")
      fa-pause
    button(@click="play()")
      fa-play
    button(@click="toggleLoud()")
      fa-volume-up(v-if="state.loud")
      fa-volume-off(v-else)
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
section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--button-pad);
}
.title {
  padding-right: var(--button-pad);
  font-weight: bold;
}
</style>