// Object Destructurning
const nayok={
    name:"Sakib khan",
    Age:35,
    address:'Dhaka',
    wife:'Opu Bissas'
}

const {name,Age,address,wife}=nayok;
console.log(name, Age, address, wife);


// Array Destructufring

const numbers=[12, 15, {name:'hero Alom'}, 46, 48];

const [first , second, obj]=numbers;
console.log(first, second, obj.name);