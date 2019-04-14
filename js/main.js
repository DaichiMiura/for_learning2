'use strict';

// データ型
// 文字列、数値、undefined(未定義)、null(値自体が無い)、真偽値、オブジェクト

// データ型を調べる
console.log(typeof 'hello');
console.log(typeof 5);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 5 < 3);

// 文字列型の数字同士でも計算可
// ただし+は文字列の連結になる
console.log('5' + 3) // 53

// 文字列を数値にキャスト
console.log(parseInt('5, 10') + 3); // 8