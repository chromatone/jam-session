<template>
  <section>
    <div class="bar">
      <button class="down">
        <i class="fa fa-arrow-down" aria-hidden="true"></i>
      </button>
      <button class="up">
        <i class="fa fa-arrow-up" aria-hidden="true"></i>
      </button>
    </div>
    <div class="num">{{ bpm }}</div>
    <div class="info"></div>
  </section>
</template>

<script>
import { Synth } from "tone";
import timeline from "../use/timeline.js";
export default {
  name: "bpm",
  props: {
    bpm: {
      type: Number,
      default: 120,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    play() {
      window.navigator.vibrate(200);
      const synth = new Synth().toDestination();
      synth.triggerAttackRelease("C4", "8n");
    },
  },
};
</script>

<style scoped>
section {
  padding: 2em;
}
.num {
  font-size: 100px;
  font-weight: 600;
}
</style>
