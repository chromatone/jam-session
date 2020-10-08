export function noteColor(digit, velocity = 1, octave = 4) {
  let sat = '50%'
  if (!digit) {
    sat = '0%'
    digit = 0
  }
  return (
    'hsla(' +
    digit * 30 +
    ',' +
    velocity * 100 +
    '%,' +
    Math.abs(octave + 2) * 8 +
    '%, 1)'
  )
}
