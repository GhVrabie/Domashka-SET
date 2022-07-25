// Exercise 1

let d1 = [33,'best', 66, 'best'];

let b1 = document.querySelector(".b-1");
let inp1 = document.querySelector(".i-1");
let out1 = document.querySelector(".out-1");

b1.onclick = function f1() {
    inp1 = inp1.value;
    d1.push(inp1);

    out1.innerHTML = showArr();
}


// Exercise 2

let b2 = document.querySelector(".b-2");
let out2 = document.querySelector(".out-2");

b2.onclick = function f2() {
    d1.pop();

    out2.innerHTML = showArr();
}


// Exercise 3

let b3 = document.querySelector(".b-3");
let out3 = document.querySelector(".out-3");

b3.onclick = function f3() {
    d1.shift();

    out3.innerHTML = showArr();
}


// Exercise 4

let b4 = document.querySelector(".b-4");
let out4 = document.querySelector(".out-4");
let inp4 = document.querySelector(".i-4");

b4.onclick = function f4() {
    inp4 = inp4.value;
    d1.push(inp4);

    out4.innerHTML = showArr();
}


// Exercise 5

let b5 = document.querySelector(".b-5");
let out5 = document.querySelector(".out-5");
let inp5 = document.querySelector(".i-5");

b5.onclick = function f5() {
    inp5 = inp5.value;
    d1.unshift(inp5);

    out5.innerHTML = showArr();
}


function showArr() {
    return d1;
}


// Exercise 6

let b6 = document.querySelector(".b-6");
let out6 = document.querySelector(".out-6");
let inp6 = document.querySelector(".i-6");
let d6 = ['test', 5, 12];

b6.onclick = function f6() {
    d6[d6.length] = inp6.value;

    out6.innerHTML = d6;
    console.log(d6);
}


// Exercise 7

let b7 = document.querySelector(".b-7");
let out7 = document.querySelector(".out-7");
let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

b7.onclick = function f7() {
    let d7New = [];

    for(let i = d7.length - 1; i > 0; i--) {
        d7New[i] = d7[i - 1];
    }
    d7 = d7New;

    out7.innerHTML = d7;
    console.log(d7);
}

// Exercise 8

let b8 = document.querySelector(".b-8");
let out8 = document.querySelector(".out-8");
let inp8 = document.querySelector(".i-8");
let d8 = [2,'4', 12, 67, 'hello'];

b8.onclick = function f8() {
    let d8New = [];
    d8New[0] = inp8.value;

    for(let i = 0; i < d8.length; i++) {
        d8New[i + 1] = d8[i];
    }
    d8 = d8New;

    out8.innerHTML = d8;
    console.log(d8);
}


// Exercise 9

let b9 = document.querySelector(".b-9");
let out9 = document.querySelector(".out-9");
d9 = [100, 200, 300, 400, 700, 121];

b9.onclick = function f9() {
    let d9New = [];
    
    for(let i = 1; i < d9.length; i++) {
        d9New[i - 1] = d9[i];
    }
    d9 = d9New;

    out9.innerHTML = d9;
    console.log(d9);

}


// Exercise 10

let b10 = document.querySelector(".b-10");
let out10 = document.querySelector(".out-10");
let d10 = [3,14,15,92,6];

b10.onclick = function f10() {
    out10.innerHTML = d10.reverse();
}


// Exercise 11

let b11 = document.querySelector(".b-11");
let out11 = document.querySelector(".out-11");
let inp11 = document.querySelector(".i-11");
let d11 = [2,3,4,5,6,7];

b11.onclick = function f11() {
    inp11 = +inp11.value;

    for(let i = 0; i < d11.length; i++) {
        if(inp11 > d11[i]) {
            out11.innerHTML = d11.indexOf(inp11);
        } else if(inp11 == d11[i]) {
            out11.innerHTML = d11.indexOf(inp11);
        }
    }
}


// Exercise 12

let b12 = document.querySelector(".b-12");
let out12 = document.querySelector(".out-12");
let inp12 = document.querySelector(".i-12");
let d12 = [6, 62, 60, 70, 1, 5];

b12.onclick = function f12() {
    inp12 = +inp12.value;
    let max = d12[3];

    for(let i = 0; i < d12.length; i++) {
        if(inp12 > max) {
            out12.innerHTML = Number(-1);
        } else if(inp12 == d12[i]) {
            out12.innerHTML = i;
        }
    }
}


// Exercise 13

let b13 = document.querySelector(".b-13");
let out13 = document.querySelector(".out-13");
let d13 = [6, 0, 22, 1, 4, 76];
let d13Reverse = [];

b13.onclick = function f13() {
    for(let i = 0; i < d13.length; i++) {
        d13Reverse[i] = d13[(d13.length - 1) - i]
    }
    out13.innerHTML = d13Reverse;
}


// Exercise 14

let b14 = document.querySelector(".b-14");
let out14 = document.querySelector(".out-14");
let inp14 = document.querySelector(".i-14");
let d14 = [];

b14.onclick = function f14() {
    inp14 = +inp14.value;
    let arr14 = []

    for(let i = 0; i < inp14; i++) {
        arr14[i] = 1;
    }
    
    d14 = arr14;
    out14.innerHTML = d14;
}


// Exercise 15

let b15 = document.querySelector(".b-15");
let out15 = document.querySelector(".out-15");
let inp15 = document.querySelector(".i-15");
let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

b15.onclick = function f15() {
    inp15 = +inp15.value;

    for(let i = 0; i < d15.length; i++) {
        if(d15.indexOf(inp15) == -1) {
            d15.push(inp15);
        }
    }
    out15.innerHTML = d15;
}


// Exercise 16

let b16 = document.querySelector(".b-16");
let out16 = document.querySelector(".out-16");
let d161 = [5,6,7,8,9];
let d162 = [23,24,56,87];
let d16 = [];

b16.onclick = function f16() {
    d16 = d161.concat(d162);

    out16.innerHTML = d16;
}


// Exercise 17

let b17 = document.querySelector(".b-17");
let out17 = document.querySelector(".out-17");
let d171 = ['a', 'b', 'c', 'd'];
let d172 = [1, 2, 3, 4, 5];
let d17 = [];

b17.onclick = function f17() {
    let arrConcat = [];
    for(let i = 0; i < d171.length; i++) {
        arrConcat.push(d171[i]);
    }
    for(let j = 0; j < d172.length; j++) {
        arrConcat.push(d172[j]);
    } 
    d17 = arrConcat;

    out17.innerHTML = d17;
}


// Exercise 18

let b18 = document.querySelector(".b-18");
let out18 = document.querySelector(".out-18");
let inp18 = document.querySelector(".i-18");
let d18 = ['b', 'c', '45', 'e', 'z', 'y'];

b18.onclick = function f18() {
    inp18 = inp18.value;

    if(d18.includes(inp18)) {
        out18.innerHTML = inp18;
    } else {
        out18.innerHTML = d18.indexOf(inp18);
    }
}


// Exercise 19

let b19 = document.querySelector(".b-19");
let out19 = document.querySelector(".out-19");
let d19 = ['Your','payment','method','will','automatically','be','charged','in','advance','every' ];

b19.onclick = function f19() {
    let maxString = d19[0];
    for(let i = 0; i < d19.length; i++) {
        if(d19[i].length > maxString.length) {
            maxString = d19[i];
        }
    }
    out19.innerHTML = maxString;
}


// Exercise 20

let b20 = document.querySelector(".b-20");
let out20 = document.querySelector(".out-20");
let d20 = [4,5,6,7,8,9,10]

b20.onclick = function f20() {
    out20.innerHTML = d20.join(" ")
}









// CLASSWORK

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const b = ["a", "b", "c", "d", "e", "f"];

// push = всегда добавляет элементы в конце массива

// a.push(10, 20, 30, 40); 
// console.log(a);

// b.push("g, h, i, j");
// console.log(b);


// pop = отрезать элементы из массива

// console.log(b.pop());
// console.log(b.pop());

// delete = удаление элемента внутри массива

// delete a[3];
// console.log(a);

// splice = удаление элемента внутри массива, но не оставляю элемент пустым (empty). Но когда мы его используем вместо
// delete то нарушается индексация. Поэтому массивы лучше клонировать и работать с клоном наших массивов до новых изменений и т.д.

// a.splice(3, 3);
// a.splice(3, 5, "world")
// console.log(a);

// shift unshift работают примерно как push и pop