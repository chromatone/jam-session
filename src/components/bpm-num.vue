<template>
  <section>
    <div class="num">
      <editable-number :num="bpm" @update="bpm = Number($event)">
      </editable-number>
    </div>
    <div class="bar">
      <div class="control">
        <button @click="play()">
          <i class="fa fa-play" aria-hidden="true"></i>
        </button>
      </div>
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
    </div>
  </section>
</template>

<script>
import { Synth, Frequency, Transport } from "tone";
import { ref, computed, watch } from "vue";
export default {
  name: "bpm",
  setup() {
    const edit = ref(false);
    const bpm = ref(100);
    const hz = computed(() => {
      Transport.bpm.rampTo(bpm.value, 1);
      return (bpm.value / 60).toFixed(2);
    });
    const note = computed(() => {
      return Frequency(hz.value).toNote();
    });
    const digit = computed(() => {
      return (Frequency(hz.value).toMidi() + 12 * 10 + 3) % 12;
    });
    const color = computed(() => {
      return "hsla(" + digit.value * 30 + ",100%,50%, 1)";
    });
    function stepBPM(step) {
      bpm.value += step;
      if (bpm.value < 30) {
        bpm.value = 30;
      }
      if (bpm.value > 360) {
        bpm.value = 360;
      }
    }
    return {
      bpm,
      hz,
      note,
      color,
      digit,
      edit,
      stepBPM,
    };
  },
};
</script>

<style scoped>
.bar,
.info {
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
</style>
