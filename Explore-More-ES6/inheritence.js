class vehicle{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }
    move(){
        console.log('This is my vehicle');
    }
}

class car extends vehicle{
    constructor(name, price, seat, speed){
        super(name, price);
        this.seat=seat;
        this.speed=speed;
    }
}