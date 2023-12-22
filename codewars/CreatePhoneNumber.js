function createPhoneNumber(numbers) {
    let formatNum = (arr, nums) => arr.slice(...nums).join("")
    let formatted = `(${formatNum(numbers, [0, 3])}) ${formatNum(numbers, [3, 6])}-${formatNum(numbers, [6, numbers.length])}`
    return formatted
}