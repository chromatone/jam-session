export const notes = [
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
]

export function noteColor(note) {
  return 'hsla(' + note * 30 + ',100%,50%, 1)'
}
