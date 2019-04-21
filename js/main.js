'use strict';
{
    document.querySelector('h1').textContent = 'Hello';

    document.querySelectorAll('li:nth-child(odd)').forEach(li => {
        li.textContent = 'li!';
    })
}