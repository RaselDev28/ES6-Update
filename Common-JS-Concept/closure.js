function stopWatch(){
    let counter=0;

    return function (){
        counter ++;
        console.log(counter);
    }
}

const watch1=stopWatch();
// console.log(watch1());
// console.log(watch1());
// console.log(watch1());
watch1();
watch1();

const watch2=stopWatch();
watch2();