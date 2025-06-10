const numbers = [2, 4, 5, 43, 33];
// Using map==> map will be loop through in an array and callback the function and also return the result

// Using normal function

function double(num) {
    return num * 2;
}

// Using arrow function

const double2 = n => n*2;

const output = numbers.map(double2);
console.log(output);

const result = numbers.map(double);
// console.log(result);

// Useing normal loop through

const doubled=[];

for(const num of numbers){
    const double=num*2;
    doubled.push(double);
}

// console.log(doubled);