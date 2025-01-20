import { reactive, readonly, watchEffect } from 'vue'
import { start, getTransport } from 'tone'

const tr = getTransport()

tr.loop = false
tr.loopEnd = '8m'

const st = reactive({
  bpm: 120,
  started: false,
  playing: false,
  root: 0,
  loud: true,
  progress: 0,
  position: 0,
  metre: {
    over: 4,
    under: 4,
    num: 4,
  },
  scale: 'minor',
})
export const state = readonly(st)

export function setBPM(bpm) {
  st.bpm = bpm
  tr.bpm.rampTo(bpm, 1)
}

export function setScale(scale) {
  st.scale = scale
}

export function toggleLoud() {
  st.loud = !st.loud
}

export const metre = {
  setOver(num) {
    st.metre.over = Number(num)
  },
  setUnder(num) {
    st.metre.under = Number(num)
  },
}

watchEffect(() => {
  tr.timeSignature = [st.metre.over, st.metre.under]
  st.metre.num = (st.metre.over / (st.metre.under / 4)).toFixed(2)
})

export const transport = {
  play() {
    if (!st.playing) {
      st.playing = true
      tr.start()
      if (!st.started) {
        start()
        st.started = true
      }
      requestAnimationFrame(function progress() {
        st.progress = tr.progress
        st.position = tr.position
        if (st.playing) {
          requestAnimationFrame(progress)
        }
      })
    }
  },
  pause() {
    if (st.playing) {
      tr.pause()
      st.playing = false
    }
  },
  stop() {
    st.playing = false
    tr.stop()
    st.progress = tr.progress
  },
}

export function setRoot(note) {
  st.root = note
}
