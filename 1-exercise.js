let inputValue = prompt("Input");
console.log(inputValue);

if ((typeof(+inputValue) == 'number') && (!isNaN(+inputValue))){
    if (inputValue % 2 === 0) {
        console.log("Число чётное");
    } else {
        console.log("Число нечётное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}
