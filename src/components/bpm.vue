<template>
  <section>
    <div class="num">
      <editable-number :num="bpm" @update="setBPM($event)"> </editable-number>
    </div>
    <div class="bar">
      <div class="adjust">
        <button @click="stepBPM(-1)">
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <button @click="stepBPM(1)">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
      <div class="info">
        <div class="block">{{ hz }}Hz</div>
        <div class="block invert" :style="{ backgroundColor: color }">
          {{ note }}
        </div>
      </div>
      <div class="indicator" :class="{ blink: blink }">
        {{ state.position }}
      </div>
    </div>
  </section>
</template>

<script>
import { setBPM } from "../use/state.js";
import { Frequency, Loop } from "tone";
import { state } from "../use/state.js";
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
      return (Frequency(this.hz).toMidi() + 12 * 10 + 3) % 12;
    },
    color() {
      return "hsla(" + this.digit * 30 + ",100%,50%, 1)";
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

<style scoped>
.bar,
.info,
.adjust {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
}
.bar {
  border-top: 1px solid var(--border-color);
}
.num {
  padding: 0 16px;
  font-size: 100px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
}
.block {
  display: flex;
  align-items: center;
  padding: var(--button-pad);
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
