import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)

// all components
import bpm from './components/bpm.vue'
app.component('bpm', bpm)

import editableNumber from './components/editable-number.vue'
app.component('editable-number', editableNumber)

import metronome from './components/metronome.vue'
app.component('metronome', metronome)

import transport from './components/transport.vue'
app.component('transport', transport)

import notes from './components/notes.vue'
app.component('notes', notes)

app.mount('#app')
