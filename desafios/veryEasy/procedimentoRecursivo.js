

const highwind = (num) => {
  
   
    // if (num === 0){
    //      return " "
    // }
 
    if (num === 1){
        return "chunk"
    } else {
        return  "chunk-" + highwind(num - 1)
    }


}

console.log(highwind(0))