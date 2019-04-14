'use strict';
{
    const a = [1, 5, 10, 100];
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }

    a.forEach((item, index) => {
        console.log(`${index}: ${item}`);
    })

    // mapを使うと全ての要素に同じ処理をすることができる。
    const b = a.map(item => item * 2);
    // [2, 10, 20, 200]

    // 真偽値を与える関数を与えて、trueのときだけ要素を取り出せるfilter
    const c = a.filter(item => item % 2 === 0);
    // [10, 100]
}