<template lang="pug">
section
  .sig
    .sign
      editable-number(:num="state.metre.over", :min="1", :max="32", @update="metre.setOver($event)").


    .sign.under.

      {{ state.metre.under }}

  .cycle
    div(:class="{ active: b == over.current.value }", v-for="b in state.metre.over", :key="b").

      {{ b }}
      
</template>

<script setup>
import editableNumber from "./editable-number.vue";
import { Transport, PluckSynth, Sequence, Draw } from "tone";
import { reactive, ref, watchEffect } from "vue";
import { state, metre } from "../use/state.js";
import { notes } from "../use/notes.js";

const over = createRow("over");
const synth = new PluckSynth().toDestination();

function createRow(place) {
  let current = ref(0);
  let steps = reactive([1, 2, 3, 4]);
  let sequence = new Sequence(
    (time, step) => {
      if (state.loud) {
        if (step == 1) {
          synth.resonance = 0.94;
          synth.triggerAttackRelease(notes[state.root] + "4", "16n", time);
        } else {
          synth.resonance = 0.8;
          synth.triggerAttackRelease(
            notes[(state.root + 7) % 12] + "4",
            "16n",
            time
          );
        }
      }
      Draw.schedule(() => {
        current.value = step;
      }, time);
    },
    [1, 2, 3, 4],
    "4n"
  ).start(0);
  watchEffect(() => {
    steps.length = 0;
    for (let i = 1; i <= state.metre[place]; i++) {
      steps.push(i);
    }
    sequence.events = steps;
  });
  watchEffect(() => {
    if (!state.playing) {
      current.value = 0;
    }
  });
  return {
    current,
  };
}

</script>

<style scoped>
section {
  display: flex;
}

.cycle {
  display: flex;
  flex-flow: row wrap;
  font-size: 1.2em;
  justify-content: space-evenly;
  align-items: stretch;
  width: 100%;
}

.cycle>div {
  flex: 1 1 40px;
  transition: all 100ms ease-out;
  display: flex;
  flex: row wrap;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.active {
  background-color: var(--accent);
  color: var(--accent-text);
  transition: all 500ms ease-in;
}

.sig {
  min-width: 60px;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}

.sign {
  font-weight: 700;
  font-size: 2em;
  flex: 1 1;
}

.sig>div {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
}

.under {
  color: var(--text-dark);
  pointer-events: none;
}
</style>