//Q1
// let prices = [100, 250, 399, 499];
// arr = prices.forEach(function(elem){
//     console.log("₹ "+elem);

// })

//Q2
// let students = [
//   { name: "Anubhav", marks: 85 },
//   { name: "Rahul", marks: 42 },
//   { name: "Aman", marks: 90 },
// ];
// students.forEach(function(stud){
//     if(stud.marks>50){
//         console.log("pass");
//     }else{
//         console.log("fail");

//     }
// })

//Q3
// let names = ["anubhav", "rahul", "aman"];

// var brr = names.map(function(elem){
//     return elem.toUpperCase()
// })
// console.log(brr);

// Q4
// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
// ];
// var arr = products.map(function(dis){
//     return {
//         name : dis.name,
//         price : dis.price,
//         Discounted : dis.price - (dis.price * 10 / 100)
//     }
// })
// console.log(arr);

// Q5
// let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// let arr = nums.filter(function(num){
//     return num%2===0;
// });

// console.log(arr);

// Q6
let users = [
  { name: "Anubhav", active: true },
  { name: "Rahul", active: false },
  { name: "Aman", active: true },
];
arr = users.filter(function(asa){
    return asa.active == true;
})
console.log(arr);




