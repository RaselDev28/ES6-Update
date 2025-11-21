const person={
    name:'Rasel',
    age:23,
    university:'SouthEast University',
    friends:['Rakib', 'Nayeem'],
    details:{
        job:'yes',
        location:'Tejgaon',
        fatherName:{
            name:'forkan',
            age:45
        }
    }
}

console.log(person['details']['fatherName']['age']); //Braket Notation

console.log(person.details.fatherName.name); //Dot Notation