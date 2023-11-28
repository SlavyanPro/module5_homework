let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'c', 'e'];

let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    if (typeof(arr[i]) !== 0){
        theSame = false;
    }
}
if (theSame) {
    console.log("array is the same");
}
else {
    console.log("array in not the same");
}