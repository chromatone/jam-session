<template lang="pug">
#full-app.p-2(:style="{ backgroundColor: noteColor(state.root, 0) }")
  .flex
    transport
  .flex.flex-wrap.w-full
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
</style>