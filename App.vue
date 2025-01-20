<script setup>
import BpmBlock from './components/BpmBlock.vue'
import MetreBlock from './components/MetreBlock.vue'
import TransportBlock from './components/TransportBlock.vue';
import ScalesBlock from './components/ScalesBlock.vue';

import { version } from './package.json'

import { state } from "./use/state.js";
import { noteColor } from "./use/notes.js";
</script>

<template lang="pug">
.p-2.transition.duration-900.flex.flex-col.h-full.flex-1.gap-2(:style="{ backgroundColor: noteColor(state.root, 0) }")
  .flex 
    TransportBlock
  .flex.flex-wrap.w-full.gap-2
    BpmBlock
    MetreBlock
  ScalesBlock
  section.flex.items-center.gap-2.justify-between(style="flex: 0 0 1em") MIT 2025
    a.text-white.no-underline.flex.gap-1(href="https://github.com/chromatone/jam-session/" target="_blank")
      .i-la-github
      .p-0 {{version}}
</template>

<style>
:root {
  --back-dark: #111;
  --back: #333;
  --back-light: #777;
  --text: #eee;
  --text-dark: #aaa;
  --border-color: #eee;
  --pad: 2em;
  --button-pad: 0.5em;
  --radius: 0;
  --accent: #fff;
  --accent-text: #333;
}

body {
  background-color: var(--back);
  padding: 0;
  margin: 0;
}

#app {
  @apply min-h-100svh flex flex-col;
  font-family: 'Commissioner', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  margin: 0;
}

#app section {
  @apply p-4 flex-1 rounded;
  border: 1px solid var(--border-color);
}

button {
  padding: var(--button-pad);
  font-size: 1em;
  outline: none;
  border: 1px solid var(--border-color);
  background-color: transparent;
  border-radius: var(--radius);
  color: var(--text);
  cursor: pointer;
  transition: background-color 150ms ease;
}

button:hover {
  background-color: var(--back-light);
}

button:active {
  background-color: var(--back-dark);
}
</style>