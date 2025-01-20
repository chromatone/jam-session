<script>

import { setBPM } from "../use/state.js";
import { Frequency, Loop } from "tone";
import { state } from "../use/state.js";
import EditableNumber from "./EditableNumber.vue";
export default {
  name: "bpm",
  data() {
    return {
      edit: false,
      bpm: 100,
      playing: false,
      progress: 0,
      blink: false,
    };
  },
  setup() {
    return {
      state,
    };
  },
  computed: {
    hz() {
      return (this.bpm / 60).toFixed(2);
    },
    note() {
      return Frequency(this.hz).toNote();
    },
    digit() {
      return (Frequency(this.hz).toMidi() + 12 * 10 + 9) % 12;
    },
    color() {
      return `hsla(${this.digit * 30}deg,100%,70%, 1)`;
    },
  },
  methods: {
    setBPM(val) {
      this.bpm = Number(val);
      setBPM(this.bpm);
    },
    stepBPM(step) {
      this.bpm += step;
      if (this.bpm < 30) {
        this.bpm = 30;
      }
      if (this.bpm > 360) {
        this.bpm = 360;
      }
    },
  },
  mounted() {
    const loop = new Loop((time) => {
      this.blink = true;
      setTimeout(() => {
        this.blink = false;
      }, 60);
    }, "4n").start(0);
  },
};
</script>


<template lang="pug">
section
  .num.text-9xl.pb-8.font-bold.cursor-pointer.select-none
    EditableNumber(:num="bpm", @update="setBPM($event)")
  .bar
    .adjust
      button(@click="stepBPM(-1)")
        .i-fa-minus
      button(@click="stepBPM(1)")
        .i-fa-plus
    .info
      .block {{ hz }}Hz
      .block.invert(:style="{ backgroundColor: color }") {{ note }}
    .indicator(:class="{ blink: blink }") {{ state.position }}
</template>



<style scoped lang="postcss">
.bar,
.info,
.adjust {
  @apply flex justify-between items-stretch;
}

.bar {
  @apply border;
}

.block {
  @apply flex items-center p-4;
}

.invert {
  color: black;
}

.indicator {
  transition: all 40ms ease;
  flex: 1 1 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blink {
  background-color: #fff;
}
</style>
