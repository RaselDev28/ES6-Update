function A(){
    x=6;
    console.log(x);
    var x;


    
    // let x; // Hoisting is run but can not be set undifined value into the memory


    // const x ; // Before hoisting code given syntax error because const value you cannot be assign

}

A();