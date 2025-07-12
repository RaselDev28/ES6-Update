function buyBooks(sellBook, name){
    sellBook(name);
}


function sellBook(name){
    console.log('You Boughut a BOOK', name);
}

function giftBooks(name){
    console.log('Gifted book is:', name);
}

buyBooks(sellBook, 'Java-Script');
buyBooks(sellBook, 'Java');
buyBooks(sellBook, 'C++');
buyBooks(giftBooks, 'Python');

