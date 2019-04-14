'use strict';
// 関数
// 引数にはconstやletはいらない
function showAd(message = 'AD') { // 仮引数
    console.log(`---${message}---`);
}

showAd();        // ---AD---
showAd('hello'); // ---hello---

// 関数式　無名関数
const sum = function(a, b, c) {
    return a + b + c;
};

const total = sum(1, 2, 3) + sum(4 ,5, 6);
console.log(total);

// アロー関数
const sum2 = (a, b, c) => a + b + c;
console.log(sum2(1, 2, 3));

//引数が１つのときはカッコを省略可能
const double = a => a * 2;
console.log(double(12));

// スコープについて

const x = 2; // グローバルスコープ

function f() {
    const x = 1;
    console.log(x);
}

f();           // 1
console.log(x) // 2