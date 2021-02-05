
  function fibb(n) {
   var fib = [];
   if (n === 1) {
     fib = [0];
   } else
   if (n === 2) {
     fib = [0, 1];
   } else {
     fib = [0, 1];
     for (var i = 2; i < n; i++) {
       fib.push(fib[fib.length - 2] + fib[fib.length - 1]); };
   }
   return fib
  };
fib = fibb(5);
console.log(fib);
