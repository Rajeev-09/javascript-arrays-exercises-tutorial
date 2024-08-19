function generateRandomArray() {
    let auxArray = [];
    let randomLength = Math.floor(Math.random() * 100);
    // console.log(randomLength);
    for (let i = 1; i < randomLength; i++){
        hi = auxArray.push(Math.floor(Math.random() * 100)); 
        // console.log(hi);
    }
    console.log(auxArray);	
    return auxArray; 
}

let myStupidArray = generateRandomArray();
// Your code here
let theLastOne = myStupidArray[myStupidArray.length - 1];
console.log(theLastOne)

