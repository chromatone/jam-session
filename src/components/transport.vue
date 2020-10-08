<template>
  <section>
    <div class="title">JAM SESSION</div>
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
      {{ state.position }}
    </div>
  </section>
</template>

<script>
import { state, play, pause, stop } from "../state.js";
export default {
  methods: {},
  setup() {
    return {
      state,
      play,
      pause,
      stop,
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  padding: var(--button-pad);
}
</style>