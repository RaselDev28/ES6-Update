const products=[
        {id: 1, name: 'Dell Laptop', Price: 100000},
        {id: 2, name: 'HP Laptop', Price: 110000},
        {id: 3, name: 'Lenovo Laptop', Price: 110000},
    ]

    class product{
        country='Bangladesh';
        constructor(name){
            this.name=name;
        }
        speak(talk){
            console.log(`Talking about: ${talk}`);
        }
    }

    const lenevo= new product('lenovo laptop');
    // console.log(lenevo);
    // lenevo.speak('hello world');


    class teacher{
        // Object
        constructor(name, sub){
            this.name=name;
            this.sub=sub;
        }
        // Mehthod
        lecture(){
            console.log('Sir theaching Programming ')
        }
    }

    const Theacher=new teacher('Jhonkar', 'Programming');
    console.log(Theacher);

    const Rasel=new teacher('MD_Rasel', 'English');
     console.log(Rasel);