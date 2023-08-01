const ages = [33, 12, 20, 16, 21, 34, 44, 55];

// sort
// const sortedAges = ages.sort((a,b)=> a-b);
// ages.sort();
// console.log(ages);
// const alif = ["A", "F", "I", "L", "O", "H", "B"];
// const alifSort = alif.sort((a, b) => a.localeCompare(b));
// console.log(alifSort);

// const fruits = ["olma", "banan", "anjir", "apelsin", "shaftoli"];
// fruits.sort();
// console.log(fruits); // Chiqarish: ["anjir", "apelsin", "banan", "olma", "shaftoli"]

// Ro'yxatni teskarisiga tartiblash
// let fruits = ["olma", "banan", "anjir", "apelsin", "shaftoli"];
// fruits.sort().reverse();
// console.log(fruits); // Chiqarish: ["shaftoli", "olma", "banan", "apelsin", "anjir"]

// const people = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 }
// ];
// people.sort((a, b) => a.name.localeCompare(b.name));
// console.log(people);

//forEach
// ages.forEach((company) => console.log(company));

// const user = {
//   name: "Habibulloh",
//   age: 20,
//   email: "karimovhabibulloh147@gmail.com",
//   location: "Namangan",
//   language: ["uzbek", "russian", "english"],
//   login: function () {
//     console.log("siz bu saytdagi sahifangizga kirdizgiz");
//   },
//   logout: function () {
//     console.log("siz bu sahifani tark etingiz");
//   },
//   spek: function () {
// //   console.log(this.language);
//     console.log('I can speek:');
//     this.language.forEach((lang)=>{
//         console.log(lang)
//     })
//   },
//   movies:[
//     { name: "Avatar", likes: 456 },
//     { name: "Harry Potter", likes: 656 },
//     { name: "Titanic", likes: 156 },
//     { name: "Marvel", likes: 356 },
//   ],
//   movi: function (){
//     this.movies.forEach((item)=>{
//         const res = `Kino nomi: ${item.name} 🎥, likes: ${item.likes} ❤️`;
//         console.log(res);
//     })
//   }
// };

// user.login();
// user.spek();
// user.movi();
// const movies = [
//   { name: "Avatar", likes: 456 },
//   { name: "Harry Potter", likes: 656 },
//   { name: "Titanic", likes: 156 },
//   { name: "Marvel", likes: 356 },
// ];

// movies.forEach((item) => {
//   const res = `Kino nomi: ${item.name} 🎥, likes: ${item.likes} ❤️`;
//   console.log(res);
// });
// const random = Math.trunc(Math.random(area) * 100)
// console.log(random);
// const arr = [1];
// arr.forEach((item) => {
//   const random = Math.floor(Math.random(item) * 10);
//   if (random === 1) {
//     console.log('bir');
//   }
//   console.log(random);
// });

// filtr
// const canDrink = ages.filter((ages) => ages <= 21);
// const array = [1, 2, 3, 5, 6];
// const filterArr = array.filter((element) => element % 2 == 0);
// console.log(filterArr);
//reduce
// const total = ages.reduce((previoseElement, currentElement)=> previoseElement + currentElement,0)

//   const friuts = ['olma', 'banan', 'anjir', 'apelsin', 'shaftoli'];
//   const filterFruit = friuts.filter(item => item.startsWith('a'))
// console.log(filterFruit);

// const friuts = ['olma', 'banana', 'anjir', 'apelsin', 'shaftoli'];
// const filterFruit = friuts.filter(item => item.endsWith('a'))
// console.log(filterFruit);

// let fruits = ["olma", "banan", "anjir", "apelsin", "shaftoli"];
// let filtrFruit = fruits.filter((fruit) => fruit.includes("l"));
// console.log(foundFruit);

// const people = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
//   { name: "Aliya", age: 22 },
//   { name: "Mariya", age: 20 },
// ];
// let peopleFilter = people.filter((person) => person.age <= 20);
// console.log(peopleFilter);

// conbain
// const combinesAges = ages
//   .map((itme) => itme * 2)
//   .filter((itme) => itme >= 40)
//   .sort((a, b) => a - b)
//   .reduce((pre, curr) => curr + pre);

// const people = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
//   { name: "Aliya", age: 22 },
//   { name: "Mariya", age: 20 },
// ];

// const peopleConbine = people
//   .map((item) => item.age)
//   .filter((item) => item >= 22)
//   .sort((a, b) => a - b);
// console.log(peopleConbine);

// const people = [
//   { name: "John", age: 30 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
//   { name: "Aliya", age: 22 },
//   { name: "Mariya", age: 20 },
// ];

// const peopleConbine = people
//   .map((item) => item.name)
//   .filter((item) => item.includes("A"))
//   .sort((a, b) => a.localeCompare(b));
// console.log(peopleConbine);

//reduce
// const numbers = [5, 2, 9, 1, 5, 6];
// // yig'indisini topish
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);

// const products = [
//   { name: 'Olma', price: 15000 },
//   { name: 'Banan', price: 10000 },
//   { name: 'Anjir', price: 25000 },
//   { name: 'Apelsin', price: 18000 }
// ];
// let total = products.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
// console.log(total); 

// const numbers = [1, 2, 3, 4];
// const doubledNumbers = numbers.map(number => number * 2);
// console.log(doubledNumbers); 
// console.log(numbers);


// // Higher-order function: Funksiyalarni argument sifatida qabul qiladi
// function performOperation(x, y, operation) {
//   return operation(x, y);
// }

// // Higher-order function: Funksiyani qaytaradi
// function createMultiplier(factor) {
//   return function(x) {
//     return x * factor;
//   };
// }

// // Higher-order function: Funksiyani argument sifatida qabul qiladi
// function sayHello(name) {
//   return function() {
//     console.log(`Salom, ${name}!`);
//   };
// }


// const childName = "Ali";


// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;


// console.log(performOperation(5, 3, add)); // Chiqarish: 8
// console.log(performOperation(5, 3, multiply)); // Chiqarish: 15

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(5)); // Chiqarish: 10
// console.log(triple(5)); // Chiqarish: 15


// const greetChild = sayHello(childName);
// greetChild(); // Chiqarish: Salom, Ali!
