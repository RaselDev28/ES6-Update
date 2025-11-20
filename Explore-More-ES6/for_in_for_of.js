// const person={
//     name: 'Rasel',
//     age:23,
//     country:'Bangladesh'
// }

// for (let key in person){
//     console.log(`Key ${key} value: ${person[key]}`); //For in Loop
// }

// for (let [key,value] of Object.entries(person)){
//     console.log(`Key: ${key} values: ${value}`);
// }


const Students={
    name: 'Rahima',
    age:15,
    class:3,
    district:'Noakhali'
}


//...................For in........................
for (let key in Students){
    console.log(`key: ${key} value: ${Students[key]}`)
}

// ...................For Of.......................

for (let [key, value] of Object.entries(Students)){
    console.log(`key: ${key} vlaue: ${value}`);
}