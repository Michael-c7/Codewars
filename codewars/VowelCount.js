function getCount(str) {
    var vowelsCount = 0;
    let vowels = "aeiou";
    
    for(let i = 0; i < str.length; i+=1) {
      if(vowels.includes(str[i])) {
        vowelsCount+=1;
      }
    }
    
    return vowelsCount;
  }