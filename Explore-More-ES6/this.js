class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
sleep(){
    console.log(`sleeping now: ${this.name}`)
}
}

const Rasel = new Person('Rasel', 24);
console.log(Rasel);
Rasel.sleep();