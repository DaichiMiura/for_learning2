'use strict';
{
    const a = [10, 20];
    // ピリオド3つ(スプレッド演算子)で配列の値の展開
    // ちなみにこの場合は配列がコピーされるのでaの変更はbでは反映されない
    const b = [1, 2, ...a]; 
    console.log(b); // [1, 2, 10, 20]

    const sum = (a, b) => a + b;
    console.log(sum(...a)); // 30

    const o1 = {a: 1};
    const o2 = {...o1, b: 2};
    console.log(o2); // {a: 1, b: 2}


    // 分割代入
    const numbers = [1, 2, 3, 8];
    const [x, y, ...rest] = numbers;
    console.log(x);    // 1
    console.log(y);    // 2
    console.log(rest); // [3, 8]
    

    const player = {
        name: 'taguchi',
        score: 55,
        hp: 33,
        mp: 22,
    };

    const {name, score, ...points} = player;
    console.log(name);   // taguchi 
    console.log(score);  // 55
    console.log(points); // {hp: 33, mp: 22}
}