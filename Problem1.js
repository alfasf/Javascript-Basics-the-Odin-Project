//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Find the sum of all the multiples of 3 or 5 below 1000.

//I decided to use a function not to only find multiples for 3 or 5 but for any other input numbers. 

var myMultiples=function anyMultiple(first, second, limit){//the first two arg will determine the multiples of these numbers of. 
                                                          //limit arg will be the limit number
    
    var multiples = [];//an empty array to put the array elements later
    for(i=1; i < limit; i++){//looping through all elements
    if(i%first===0 || i%second===0){
      multiples.push(i);//pushing new elements into the arrays    
    }
  }
    console.log(multiples);
    return multiples;
}
      
//Finally getting the sum the multiples array.
var sum = myMultiples(3, 5, 1000).reduce(function(acc, curr){
  return acc + curr;
});

sum;


