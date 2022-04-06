const valdot = document.getElementById("valdot");
const disp = document.getElementById("disp");
const val1 = document.getElementById("val1");
const val2 = document.getElementById("val2");
const val3 = document.getElementById("val3");
const val4 = document.getElementById("val4");
const val5 = document.getElementById("val5");
const val6 = document.getElementById("val6");
const val7 = document.getElementById("val7");
const val8 = document.getElementById("val8");
const val9 = document.getElementById("val9");
const val0 = document.getElementById("val0");
const add = document.getElementById("add");
const mul = document.getElementById("mul");
const divt = document.getElementById("divt");
const subt = document.getElementById("subt");
const cls = document.getElementById("cls");
const power = document.getElementById("power");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
let update;
let prev;


//This is for val1
valdot.addEventListener("click", e => {
    e.preventDefault();
    disp.value += valdot.value;
})


//This is for val1
val1.addEventListener("click", e => {
    e.preventDefault();
    disp.value += val1.value;
})


//This is for val2
val2.addEventListener("click", e => {
    e.preventDefault();
    disp.value += val2.value;
})


//This is for val3
val3.addEventListener("click", e => {
    e.preventDefault();
    disp.value += val3.value;
})


//This is for val4
val4.addEventListener("click", e => {
    e.preventDefault();
    disp.value += val4.value;
})


//This is for val5
val5.addEventListener("click", e => {
    e.preventDefault();
    disp.value += val5.value;
})


//This is for val6
val6.addEventListener("click", e => {
    e.preventDefault();
    disp.value += val6.value;
})



//This is for val7
val7.addEventListener("click", e => {
    e.preventDefault();
    disp.value += val7.value;
})


//This is for val8
val8.addEventListener("click", e => {
    e.preventDefault();
    disp.value += val8.value;
})


//This is for val9
val9.addEventListener("click", e => {
    e.preventDefault();
    disp.value += val9.value;
})


//This is for val0
val0.addEventListener("click", e => {
    e.preventDefault();
    disp.value += val0.value;
})



//This is for Addition
add.addEventListener("click", e => {
    e.preventDefault();
    prev = disp.value;
    disp.value = "";
    update = add.value;

    // disp.value += add.value;
})


//This is for Multiplication
mul.addEventListener("click", e => {
    e.preventDefault();
    prev = disp.value;
    disp.value = "";
    update = mul.value;

    // disp.value += mul.value;
})


//This is for Division
divt.addEventListener("click", e => {
    e.preventDefault();
    prev = disp.value;
    disp.value = "";
    update = divt.value;

    // disp.value += divt.value;
})


//This is for Substraction
subt.addEventListener("click", e => {
    e.preventDefault();
    prev = disp.value;
    disp.value = "";
    update = subt.value;

    // disp.value += subt.value;
})


//This is for Clear Screen
cls.addEventListener("click", e => {
    e.preventDefault();
    disp.value = (disp.value).substring(0,(disp.value.length) - 1);
})


//This is for power
power.addEventListener("click", e => {
    e.preventDefault();
    disp.value = Math.pow(disp.value,2);
})


//This is for Equal or Result
result.addEventListener("click", e => {
    e.preventDefault();
    let current = disp.value;

    if (update == "+") {
        let answer = parseFloat(prev) + parseFloat(current);
        disp.value = answer;   
    }
    else if (update == "*") {
        let answer = parseFloat(prev) * parseFloat(current);
        disp.value = answer;   
    }
    else if (update == "/") {
        let answer = parseFloat(prev) / parseFloat(current);
        disp.value = answer;   
    }
    else if (update == "-") {
        let answer = parseFloat(prev) - parseFloat(current);
        disp.value = answer;   
    }
})


//This is for Reset
reset.addEventListener("click", e => {
    e.preventDefault();
    disp.value = "";
})