class person{
    #status  //private encasulation
    constructor(name, age, status){
        this.name=name;
        this.age=age;
        this.#status=status;
    }
    sleep(){
        console.log(`${this.name} sleep at 9PM`);
    }
    action(){
        console.log(this.#status);
    }
}
const rasel=new person('Rasel', 45, 'Married');
rasel.action();