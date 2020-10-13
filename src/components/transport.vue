<template>
  <section>
    <div class="title">JAM SESSION IN {{ notes[state.root] }}</div>
    <div class="control">
      <button @click="stop()">
        <i class="fa fa-stop" aria-hidden="true"></i>
      </button>
      <button @click="pause()">
        <i class="fa fa-pause" aria-hidden="true"></i>
      </button>
      <button @click="play()">
        <i class="fa fa-play" aria-hidden="true"></i>
      </button>
      <button @click="toggleLoud()">
        <i
          class="fa"
          :class="{ 'fa-volume-up': state.loud, 'fa-volume-off': !state.loud }"
          aria-hidden="true"
        ></i>
      </button>
    </div>

    <div class="spacer"></div>
  </section>
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