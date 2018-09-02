console.clear();

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) console.log('FizzBuzz');
    else if (i % 3 === 0) console.log('Fizz');
    else if (i % 5 === 0) console.log('Buzz');
    else console.log(i);
  }
}

fizzBuzz(50);

/*
  If divisible by 3 log out 'Fizz'
  If divisible by 5 log out 'Buzz'
  If divisibile by both log out 'Fizz Buzz'
*/
