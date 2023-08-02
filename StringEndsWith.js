function solution(str, ending) {
  let amtToCut = str.length -  ending.length
  let compare = str.slice(amtToCut) === ending ? true : false
  
  return compare
}