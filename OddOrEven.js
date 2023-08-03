function oddOrEven(array) {
  const sumArray = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const EvenOddCheck = sumArray % 2 === 0 ? 'even' : 'odd'
  
  return EvenOddCheck
}