function findAverage(array) {
    
    let sum = 0;
    if(typeof array !== 'undefined' && array.length > 0) {
        let sum = 0;
        for (const iterator of array) {
            sum+= iterator;
        }
        return sum / array.length;
    }
    else return 0;
    
  }

//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
function firstNonConsecutive (arr) {
 
 
}