<script setup>
import BpmBlock from './components/BpmBlock.vue'
import MetreBlock from './components/MetreBlock.vue'
import TransportBlock from './components/TransportBlock.vue';
import ScalesBlock from './components/ScalesBlock.vue';

import { state } from "./use/state.js";
import { noteColor } from "./use/notes.js";
</script>

<template lang="pug">
.p-2(:style="{ backgroundColor: noteColor(state.root, 0) }")
  .flex
    TransportBlock
  .flex.flex-wrap.w-full
    BpmBlock
    MetreBlock
  ScalesBlock
</template>