
// let count = 0;



// const func = () => {
//   const interval = setInterval(() => {
//     count++;
//     console.log(count)
//     if (count === 10) {
//       clearInterval(interval)
//     }
//   },1000)
// };

// // func()

// let btn = document.querySelector("#btn");
// let btn2 = document.querySelector("#btn2");


// const myPromise = new Promise((res, rej) => {
//   btn.addEventListener("click", () => {
//   res('Resolved')
// })
//   btn2.addEventListener("click", () => {
//   rej('Rejected')
// })
// }) .then((res) => {
//     console.log("resolved");
//   })
//   .catch((e) => {
//     console.log("Rejected");
//   });


// const btnOne = document.querySelector("#btnOne");
// const btnTwo = document.querySelector("#btnTwo");
// const text = document.querySelector("#text")


// let count = 0;

// btnOne.addEventListener('click', () => {
//   count++;
//   text.textContent = count;
// })

// btnTwo.addEventListener('click', () => {
//   count--;
//   text.textContent = count;
// })



const reverseStr = (str) => {
  return str.split('').reverse().join('')
}

console.log(reverseStr("hello"))
console.log(reverseStr("how are you"))



const largerstNum = (arr) => {
  return Math.max(...arr)
}

console.log(largerstNum([1,2,3,4,5,6,21]))


const fizzBuzz = () => {
  for (let i=1; i <= 20; i++){
    if (i% 3===0 && i%5===0) {
      console.log('fizzBuzz')
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("buzz")
    } else {
      console.log(i)
    }
  }
}

fizzBuzz();


const palindrome = (str) => {
  let word = str.split('').reverse().join('');
  return str === word;
}

console.log(palindrome("bob"))
console.log(palindrome("bobs"))


const countVowels = (str) => {
  let vowels = 'aeiou';
  return str.split('').filter((word) => vowels.includes(word)).length;
}

console.log(countVowels('hello world'))


const sumNums = (arr) => {
  return arr.reduce((sum, num) => sum + num,0);
}

console.log(sumNums([1,2,3,4,5,56,6]))


const removeDups = (arr) => {
  return [...new Set(arr)];
}

console.log(removeDups([1,2,2,3,4,4,5,5,6]))
