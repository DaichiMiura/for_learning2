'use strict';

// if
const score = 60;

if (score >= 75) {
    console.log('hello');
} else if (score >= 60) {
    console.log('good');
} else {
    console.log('ok');
}

// 短縮形
score >= 80 ? console.log('great') : console.log('ok');

// switch
const signal = 'green';
switch (signal) {
    case 'red':
        console.log('stop');
        break;
    case 'yellow':
        console.log('caution');
        break;
    case 'blue':
    case 'green':
        console.log('go');
        break;
    default:
        console.log('wrong signal');
        break;
}

// for
// テンプレートリテラル。バッククォートで囲んだ中では変数や定数の展開可能
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }

    if (i === 8) {
        break;
    }
    console.log(`${i} hello`);
}

// while
let hp = 200;
while (hp > 0) {
    console.log(`${hp} HP left!`);
    hp -= 15;
}