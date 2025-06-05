// Templete String

const a = 5;
const number = [12, 34, 5];
const person = {
    name: 'Rahim'
}
const massege = `Hi, ${person.name} has a: ${a} access to ${number[1]} `;
// console.log (massege);

// Arrow Function


const square = x => Math.pow(x, 2);
// console.log(square(5));

const sum = (x, y) => x + y;
console.log(sum(12, 4));


// Destructuring

const { age, c, ...others } = { a: 12, b: 23, c: 45, name: 'Rahim', roll: 48, age: 24 };

const [first, second, ...remaining] = [25, 34, 56, 90];