import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

const app = createApp(App)

// all components
import bpmNum from './components/bpm-num.vue'
app.component('bpm-num', bpmNum)

app.mount('#app')
