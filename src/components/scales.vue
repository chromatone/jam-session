<template lang="pug">
section
  .row
    .main {{ scales[state.scale].name }}
    .choose
      .scale(@click="setScale(scale.handle)", :class="{ chosen: scale.handle == state.scale }", v-for="(scale, key) in scales", :key="key").

        {{ scale.name }}

  .notes
    .note(:style="{ backgroundColor: color(key) }", :class="{ active: rootScale[key], main: key == state.root }", @click="setRoot(key)", v-for="(note, key) in notes", :key="key").

      {{ note }}
      
</template>

<script>
import { notes, noteColor, rotate, piano } from "../use/notes.js";
import { scales } from "../use/scales.js";
import { state, setScale, setRoot } from "../use/state.js";
import { watchEffect, ref } from "vue";
export default {
  setup() {
    const rootScale = ref([]);
    watchEffect(() => {
      let steps = scales[state.scale].steps;
      let mainRoot = state.root;
      rootScale.value = rotate(steps, -state.root);
    });

    function color(key) {
      if (state.root == key || rootScale.value[key]) {
        return noteColor(key);
      } else if (piano[key]) {
        return "#444";
      } else {
        return "#aaa";
      }
    }

    return {
      setRoot,
      scales,
      notes,
      state,
      setScale,
      rootScale,
      color,
    };
  },
};
</script>

<style scoped>
section,
.notes {
  display: flex;
  flex-flow: row wrap;
  justify-content: stretch;
  align-items: stretch;
  font-weight: bold;
}
.row {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
}
.row div {
  padding: var(--button-pad);
  display: flex;
  align-items: center;
}
.main {
  flex: 1 1 10%;
}
.choose {
  overflow: scroll;
  flex: 1 1 80%;
  overscroll-behavior: none;
  scroll-snap-type: x mandatory;
  font-size: 0.8em;
}
.scale {
  scroll-snap-align: start;
  cursor: pointer;
  font-weight: normal;
  opacity: 0.3;
}
.scale:hover {
  opacity: 1;
}
.scale.chosen {
  opacity: 1;
}
.notes {
  width: 100%;
}
.note {
  background-color: #555;
  cursor: pointer;
  flex: 1 8 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 1em;
  padding: 0 4px;
  filter: grayscale(100%);
  color: hsla(0, 100%, 100%, 0.1);
  transition: all 900ms ease-in-out;
}
.active {
  flex: 5 1 7%;
  font-size: 1.2em;
  color: hsla(0, 100%, 100%, 1);
  filter: grayscale(0%);
}
.note.main {
  box-shadow: 0 0 0px 4px inset #eee;
}
</style>