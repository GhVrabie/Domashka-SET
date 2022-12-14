// Task 1
// Создайте set s1. Добавьте в него три элемента 'h', 'b', 'o', 'h'. Добавление делайте через add. Выведите в консоль получившийся набор (set) s1.

let s1 = new Set();

s1.add("h");
s1.add("b");
s1.add("o");
s1.add("h");

console.log(s1);


// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна добавить в набор s2 элементы, которые пользователь вводит в i-2. Функция должна выводить в консоль s2 после каждого добавления элемента.

let b2 = document.querySelector(".b-2");
let input2 = document.querySelector(".i-2");
let s2 = new Set();


b2.onclick = function f2() {
    let add = "";

    if(s2.size >= 0) {
       add += input2.value;
    }

    s2.add(add);

    console.log(s2);
}


// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна удалить из набора s3 строку, которую пользователь вводит в i-3. Функция должна выводить в консоль s3 после каждого удаления элемента.

let input3 = document.querySelector(".i-3");
let s3 = new Set(['one', 'two', 'four']);

const f3 = () => { 
    for(let value of s3) {
        if(value == input3.value) {
            s3.delete(value);
        }
    }
    console.log(s3);
}

document.querySelector('.b-3').onclick = f3;


// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна проверить наличие в наборе s4 строки введенной пользователем в i-4. Если строка есть - то вывести в out-4 true. Если нет - false.

let input4 = document.querySelector(".i-4");
let out4 = document.querySelector(".out-4");
let s4 = new Set(['a', 'b', 'c', 'z']);

const f4 = () => { 
    if(s4.has(input4.value)) {
        out4.innerHTML = input4.value;
    } else {
        out4.innerHTML = "Item not found";
    }
    console.log(s4);
}

document.querySelector('.b-4').onclick = f4;


// Task 5
//  При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 количество элементов в наборе s5.

let out5 = document.querySelector(".out-5");
let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);

const f5 = () => {
    console.log(s5.size);
}

document.querySelector('.b-5').onclick = f5;


// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 число уникальных элементов в массиве a6. Решение должно использовать set.

let out6 = document.querySelector(".out-6");
let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56];

const f6 = () => { 
    let b = new Set(a6);
    console.log(b);
}

document.querySelector('.b-6').onclick = f6;


// Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна получать из i-7 значение пароля и проверять, чтобы пользователь в строке пароля использовал не повторяющиеся символы. Если символы уникальны, а длина пароля больше ( строго) 6 то выводите в out-7 число 1. Если есть повторяющиеся символы, или длина меньше или равна 6 - то выводите 0. Для проверки уникальности символов используйте Set.

let input7 = document.querySelector(".i-7");
let out7 = document.querySelector(".out-7");

const f7 = () => { 
    input7 = input7.value;

    let s7 = new Set(input7);
    if (input7.length > 6 && s7.size > 6) {
        out7.innerHTML = 1;
    }
    else {
        out7.innerHTML = 0;
    }
    console.log(s7);
}

document.querySelector('.b-7').onclick = f7;


// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна перебрать набор s8 и добавить в массив ar8 только числа больше 5. Выведите массив в консоль.

let out8 = document.querySelector(".out-8");

let s8 = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
let ar8 = [];

const f8 = () => { 
    // let biggerNum = "";

    for(let value of s8) {
        if(value > 5) {
            ar8.push(value);
        }
    }
    console.log(ar8)
}

document.querySelector('.b-8').onclick = f8;


// Task 9
//  При нажатии b-9 выполняете функцию f9. Функция должна принимать набор our_set в качестве параметра, преобразовывать его в строку, причем после каждого символа строки должен быть пробел. Функция должна возвращать результирующую строку. 
// В нашем примере результат должен быть 9 8 7 6 5 

const f9 = our_set => { 
    return our_set;
}

document.querySelector('.b-9').onclick = () => {
    let s9 = new Set([9, 8, 7, 6, 5]);
    let our_set = "";

    for(let value of s9) {
        our_set += value.toString() + " ";
    }
    s9 = our_set;

    document.querySelector('.out-9').innerHTML = f9(s9);
}


// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна принимать набор set в качестве параметра и выводить его в указанный элемент. Элемент указывается как второй параметр функции f10. Вывод значений - через пробел.

// К сожалению не понимаю как эта функция работает! :)


// Task 11
//  При нажатии b-11 выполняете функцию f11. Функция должна преобразовать массив a11 в набор. И выводить в консоль. Изучите вывод получившегося набора. Разберитесь почему так происходит.
// Да, эта задача решена! Просто разберитесь.

const f11 = () => {
    let s = new Set();
    s.add([1]);
    s.add([1]);
    console.log(s);
}

document.querySelector('.b-11').onclick = f11;


// Task 12
//   При нажатии b-12 выполняете функцию f12. Функция должна преобразовать строку str12 в массив, так, что каждая буква - отдельный элемент массива. Потом создать набор на основе массива и возвратить его.

let str12 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

const f12 = () => {
    str12 = str12.replace(/\s/g, '');

    let a12 = [];
    let strToArr = "";

    for(let i = 0; i < str12.length; i++) {
        strToArr += a12.push(str12[i]);
    }

    let set12 = new Set(a12);
    return set12;

        // Без итераций, ведь так же короче код?

        // str12 = str12.replace(/\s/g, '');

        // let a12 = Array.from(str12);
        // let set12 = new Set(a12);
        // return set12;
}

document.querySelector('.b-12').onclick = () => {
    console.log(f12());
}


// Task 13
//  При нажатии b-13 выполняете функцию f13. Функция должна преобразовать строку str13 в массив, причем каждая буква - отдельный элемент массива. Потом создать набор на основе массива. Затем, перебирая набор поэлементам, найти сколько раз каждый символ встречается в исходном массиве. Результат - в виде объекта типа { символ : количество, символ : количество } вывести в консоль и возвратить.
// пример результата для строки 'Hello ho'
// { "H" : 1, 'e' : 1, 'l' : 2, "o" : 2, " ": 1}

let str13 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

const f13 = () => {
    str13 = str13.replace(/\s/g, '');

    let a13 = Array.from(str13);
    let set13 = new Set(a13);
    let result = {};

    for(let item of set13) {
        let counter = 0;
        for(let i = 0; i < str13.length; i++) {
            if(str13[i] === item) {
                counter++;
            }
        }
        result[item] = counter;
    }

    return Object.entries(result);
}

document.querySelector('.b-13').onclick = () => {
    console.log(f13());
}










// CLASSWORK


// SET собирает только уникальные значения, без повторений. Применяется строгое равенство.

// let a = new Set(); 

// console.log(a);

// a.add(1);
// a.add(2);
// a.add("hello");

// console.log(a.size);
// console.log(a.has(2));
// console.log(a.has("2")); // false

// a.delete(1);
// console.log(a);


// for/for in - не работают для SET


// for(let item of a) {
//     console.log(item);
// }

// let arr = [2, 2, 3, 7, 9, 9, 0, 0, 1, 4, 6, "hello", "world"];

// let b = new Set(arr);
// console.log(b);
// console.log(b.size);


// Далее превращаем SET в массив. Тут уже работают все методы массива по индексу, push и т.д.

// let bArr = Array.from(b);
// console.log(bArr);