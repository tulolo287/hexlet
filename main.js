export default function solution(a, b) {
  debugger
  while (a !== b) {
    if (a > b) {
      solution(a - b, b)
    } else if(b > a) solution(b - a, a)
    if(a === b) return a
  }
  return a
}

solution(38, 28)