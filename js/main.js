'use strict';
{
    const h1 = document.querySelector('h1');
    console.log(h1.title);
    h1.title = 'Changed!';

    h1.style.color = 'grey';
    h1.style.backgroundColor = 'pink';
}