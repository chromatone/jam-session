<template>
  <div id="full-app" :style="{ backgroundColor: noteColor(state.root, 0) }">
    <header>
      <transport />
    </header>
    <main>
      <bpm />
      <metre />
    </main>

    <scales />
  </div>
</template>

<script>
import bpm from "./components/bpm.vue";
import metre from "./components/metre.vue";
import transport from "./components/transport.vue";
import notes from "./components/notes.vue";
import scales from "./components/scales.vue";
import { state } from "./use/state.js";
import { noteColor } from "./use/notes.js";
export default {
  name: "App",
  components: {
    bpm,
    metre,
    transport,
    scales,
  },
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