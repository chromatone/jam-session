import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)

// all components
import bpmNum from './components/bpm-num.vue'
app.component('bpm-num', bpmNum)

import editableNumber from './components/editable-number.vue'
app.component('editable-number', editableNumber)

import metronome from './components/metronome.vue'
app.component('metronome', metronome)

app.mount('#app')
