'use strict';
{
    // window.alert('hello'); window省略可
    // alert('hello');

    // const answer = confirm('Are you sure?');
    // console.log(answer); // ok -> true no -> false

    // setInterval(関数、ミリ秒)
    /*
    let i = 0;
    const showTime = () => {
        console.log(new Date());
        i++;
        if (i > 2) {
            clearInterval(timerId);
        }
    };

    let timerId = setInterval(showTime, 1000);
    */

    let i = 0;

    const showTime = () => {
        console.log(new Date());
        let timerId = setTimeout(showTime, 1000); // 一度だけ呼び出される
        i++;
        if (i > 2) {
            clearTimeout(timerId);
        }
    };

    showTime();

    
}