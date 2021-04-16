<template lang="pug">
#full-app(:style="{ backgroundColor: noteColor(state.root, 0) }")
  header
    transport
  main
    bpm
    metre
  scales
</template>

<script>

import { state } from "./use/state.js";
import { noteColor } from "./use/notes.js";
export default {
  name: "App",

  setup() {
    return {
      state,
      noteColor,
    };
  },
};
</script>

<style scoped>
#full-app {
  transition: all 300ms ease;
  padding: 0.5em;
}
main,
header,
article {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>