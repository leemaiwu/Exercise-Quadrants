const quadrant = (x, y) => {
  if (x > 0 && y > 0) {
    return 1
  } else if (x < 0 && y > 0) {
    return 2
  } else if (x < 0 && y < 0) {
    return 3
  } else if (x > 0 && y < 0) {
    return 4
  }
}

console.log(quadrant(1, 2)) // 1
console.log(quadrant(3, 5)) // 1
console.log(quadrant(-10, 100)) // 2
console.log(quadrant(-1, -9)) // 3
console.log(quadrant(19, -56))// 4
