// map
const products=[
        {id: 1, name: 'Dell Laptop', Price: 100000},
        {id: 2, name: 'HP Laptop', Price: 110000},
        {id: 3, name: 'Lenovo Laptop', Price: 110000},
    ]
const names=products.map(product=>product.name);
console.log(names);