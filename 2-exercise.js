let num = 1;

if ((typeof(num) == 'number')&&(!isNaN(num))) {
    console.log("Числовое значение");
} else if (typeof(num) == 'string') {
    console.log("Строка");
} else if (typeof(num) == 'boolean') {
    console.log("Логическое значение");
} else {
    console.log("Тип x не определён");
}
