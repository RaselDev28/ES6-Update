function changeName(person){
    person.name='Rahim';
    console.log('The name is :', person.name);
}

const person={name:'Karim'};
changeName(person);
console.log('The name is: ', person.name);