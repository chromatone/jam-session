<template>
  <section>
    <div
      @click="setRoot(key)"
      :style="{ backgroundColor: noteColor(key) }"
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
import { notes, noteColor } from "../notes.js";
import { state, setRoot } from "../state.js";
export default {
  setup() {
    return {
      notes,
      state,
      setRoot,
      noteColor,
    };
  },
};
</script>

<style scoped>
section {
  display: flex;
  flex-flow: row wrap;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
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