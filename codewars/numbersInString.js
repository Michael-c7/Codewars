function solve(s) {
  // get just the numbers
  var regex = /[^0-9]/;
  let res = s.split(regex).filter(el => el !== "").map((el) => Number(el))
  // get biggest number
  let biggestNum = Math.max(...res)
  return biggestNum
}
