// function sum(a, b){
//     const result= a+b;

//     console.log(result);
// }

// sum(10,20);

// Without Default Parameter the result is NaN
// function sum(a, b){
//     const result= a+b;

//     console.log(result);
// }

// sum(10);


// With default parameter
function sum(a=0, b=0){
    const result= a+b;

    console.log(result);
}

sum(10);