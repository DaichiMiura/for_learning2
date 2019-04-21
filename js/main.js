'use strict';
{
    // HTMLのカスタムデータ属性

    const h1 = document.querySelector('h1');

    console.log(h1.dataset.appId);
    h1.dataset.message = 'this is custom message!';
    console.log(h1.dataset.message);
}