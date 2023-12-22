function getMiddle(s) {
    
    let evenOrOdd = num => {
      if(num % 2 === 0) {
        return "even";
      } else if(num % 2 === 1) {
        return "odd";
      }
    }
    
   
   let getMiddleCharacter = (callback, str) => {
     let evenOrOdd = callback;
     let evenMiddle = Math.floor(str.length / 2);
     let sliceEven = str.slice(evenMiddle, str.length - evenMiddle);
     
     if(callback === "even") {
       return str.slice((str.length / 2 - 1), str.length - (str.length / 2 - 1));
         
     } else if(callback === "odd") {
       return str.slice(evenMiddle, str.length - evenMiddle);
     }
   }
   
    return getMiddleCharacter(evenOrOdd(s.length), s);
 }