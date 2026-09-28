// Q1 Convert a normal function into an arrow function.
// var greet = ()=>{
//     console.log("heyy");
// }
// greet()

// Q2 Create a function that accepts unlimited numbers and returns their sum using rest operator.
// function sum(...numbers){
//     let total = 0;
//     for (num of numbers){
//         total = total + num;
//     }
//     return total
// }
// console.log(sum(10,20,30));

// Q3 Write a function that counts vowels in a string
// function vowels(str){
//     let count = 0;
//     for (let i of str.toLowerCase()){
//         if("aeiou".includes(i)){
//             count++;
//         }
//     }
//     return count
// }
// console.log(vowels("Blessoon"));

// Q4 Create a function that checks if a string is palindrome.

// function palindrome(naa){
//     let rev = naa.toLowerCase().split("").reverse().join("")
//     if (naa===rev){
//         console.log("Palindrome");
//     }else{
//         console.log("not Palindrome");
//     }
// }
// palindrome("Madam")

// Q5 Write a callback function example using setTimeout.

// setTimeout(function(){
//     console.log("2 seconds passed");
// }, 2000);
    
// Q6 Create a higher-order function that executes another function twice.
// function parent(cb){
//     console.log("I'm parent");
//     cb(" Blesson")
// }
// function child(name){
//         console.log("I'm child"+name);
//     }
// parent(child)

// 