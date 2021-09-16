// const findPrime = num => {
//     let i, primes = [2,3], n = 5;
//     const isPrime = n => {
//        let i = 1, p = primes[i],
//        limit = Math.ceil(Math.sqrt(n));
//        while (p <= limit) {
//           if (n % p === 0) {
//              return false;
//           }
//           i++;
//           p = primes[i];
//        }
//        return true;
//     }
//     for (i = 2; i <= num; i++) {
//        while (!isPrime(n)) {
//           n += 2;
//        }
//        primes.push(n);
//        n += 2;
//     };
//     return primes[num - 1];
//  }

function Prime(num) {
    output = true  
    for (var i=2 ; i<num ; i++) { //var i=2
        if (num%i === 0)  {
           output = false ; break;
        }
    }
    return output
    }
    
    function PrimeMover(num) {
    var count = 0
    for (var i=2 ; i<100000 ; i++)  { //var i=2
        if (Prime(i) === true) {
            count++; 
        }
        if (count === num) {
            return i;
            break;
        } 
        
    }
    
    }  alert(PrimeMover(1000));

 //console.log(PrimeMover(1000));
// console.log(findPrime(16));
 //console.log(findPrime(1000));