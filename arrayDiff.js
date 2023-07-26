function arrayDiff(a, b) {
  let arrFinal = [];

  for (let i = 0; i < a.length; i++) {
    let foundInB = false;

    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        foundInB = true;
        break; // Exit the inner loop when a match is found in b
      }
    }

    if (!foundInB) {
      arrFinal.push(a[i]); // Only add the element if it's not found in b
    }
  }

  return arrFinal;
}
