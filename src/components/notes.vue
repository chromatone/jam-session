<template>
  <section>
    <div
      @click="setRoot(key)"
      :style="{ backgroundColor: color(key) }"
      :class="{ active: state.root == key }"
      class="note"
      v-for="(note, key) in notes"
      :key="key"
    >
      {{ note }}
    </div>
  </section>
</template>

<script>
import { notes, noteColor, piano } from "../use/notes.js";
import { state, setRoot } from "../use/state.js";
export default {
  setup() {
    function color(key) {
      if (state.root == key) {
        return noteColor(key);
      } else if (piano[key]) {
        return "#444";
      } else {
        return "#aaa";
      }
    }
    return {
      notes,
      state,
      setRoot,
      color,
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex: 1 1 100%;
  flex-flow: row wrap;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
  font-weight: bold;
}
.note {
  background-color: #555;
  cursor: pointer;
  flex: 1 1 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  min-width: 40px;
  filter: grayscale(100%);
  transition: all 300ms ease-in-out;
}
.active {
  filter: grayscale(0%);
}
</style>