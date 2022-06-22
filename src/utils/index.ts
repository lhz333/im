export const mix = (color1: string, color2: string, weight: number) => {
  const weights = Math.max(Math.min(Number(weight), 1), 0)
  const r1 = parseInt(color1.substring(1, 3), 16)
  const g1 = parseInt(color1.substring(3, 5), 16)
  const b1 = parseInt(color1.substring(5, 7), 16)
  const r2 = parseInt(color2.substring(1, 3), 16)
  const g2 = parseInt(color2.substring(3, 5), 16)
  const b2 = parseInt(color2.substring(5, 7), 16)
  const r = Math.round(r1 * (1 - weights) + r2 * weights)
  const g = Math.round(g1 * (1 - weights) + g2 * weights)
  const b = Math.round(b1 * (1 - weights) + b2 * weights)
  const rStr = `0${(r || 0).toString(16)}`.slice(-2)
  const gStr = `0${(g || 0).toString(16)}`.slice(-2)
  const bStr = `0${(b || 0).toString(16)}`.slice(-2)
  return `#${rStr}${gStr}${bStr}`
}

export default {}
