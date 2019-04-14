'use strict';
{
    const str = 'hello';
    console.log(str.length); // 5

    // substring(start, end)
    console.log(str.substring(2, 4)); // ll

    // 文字列に対して配列のようにアクセスできる。が、変更などは不可
    console.log(str[1]) // e


    // Math
    console.log(Math.PI); // 3.1415....
    console.log(Math.random()); // 0 ... 0.99999

    // Math.random() * 6 + 1 => 1... 6.9999999
    // Math.floor(Math.random() * 6 + 1) => 1 ... 6
    console.log(Math.floor(Math.random() * 6 + 1));
}