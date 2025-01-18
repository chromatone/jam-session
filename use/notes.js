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

export const piano = [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1]

export function noteColor(pitch = 0, octave = 3, velocity = 1) {
  return (
    'hsla(' +
    pitch * 30 +
    ',' +
    velocity * 100 +
    '%,' +
    Math.abs(octave + 2) * 8 +
    '%)'
  )
}

export const rotate = (arr, count = 0) => {
  return [...arr.slice(count, arr.length), ...arr.slice(0, count)]
}
