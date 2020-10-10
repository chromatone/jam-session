import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)

// all components
import bpm from './components/bpm.vue'
app.component('bpm', bpm)

import editableNumber from './components/editable-number.vue'
app.component('editable-number', editableNumber)

import metre from './components/metre.vue'
app.component('metre', metre)

import transport from './components/transport.vue'
app.component('transport', transport)

import notes from './components/notes.vue'
app.component('notes', notes)

import scales from './components/scales.vue'
app.component('scales', scales)

app.mount('#app')
