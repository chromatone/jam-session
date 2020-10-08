import { reactive, readonly, watch } from 'vue'
import { Transport } from 'tone'

Transport.loop = true
Transport.loopEnd = '8m'

const st = reactive({
  bpm: 120,
  playing: false,
  root: 0,
  progress: 0,
  position: 0,
})
export const state = readonly(st)

export function setBPM(bpm) {
  st.bpm = bpm
  Transport.bpm.rampTo(bpm, 1)
}
export function play() {
  if (!st.playing) {
    st.playing = true
  }
}
export function pause() {
  if (st.playing) {
    st.playing = false
  }
}
export function stop() {
  st.playing = false
  Transport.stop()
  st.progress = Transport.progress
}
export function setRoot(note) {
  st.root = note
}

watch(
  () => st.playing,
  (playing) => {
    if (playing) {
      Transport.start()
      requestAnimationFrame(function progress() {
        st.progress = Transport.progress
        st.position = Transport.position
        if (st.playing) {
          requestAnimationFrame(progress)
        }
      })
    } else {
      Transport.pause()
    }
  },
)
