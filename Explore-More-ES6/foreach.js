// const numbers =[12, 12,11,10,4,2,43]

// // const result=numbers.forEach(n=> console.log(n));
// const result=numbers.forEach(n=> {

// });
// console.log(result);

const products=[
    {id:1, name:'Iphone', price:1200, color:'red'},
    {id:2, name:'Samsung', price:1300, color:'white'},
    {id:3, name:'vivo', price:1400, color:'black'},
    {id:4, name:'Oppo', price:1500, color:'gold'}
];

products.forEach(product=>{
    if(product.price>1300){
        console.log(product.price);
    }
})