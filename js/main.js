'use strict';
{
    // Date
    const d = new Date();
    console.log(d.getFullYear());
    console.log(d.getMonth()); // 0 -- 11
    console.log(d.getDate()); 
    console.log(d.getDay());  // 0 - 6 曜日のこと
    console.log(d.getHours());
    console.log(d.getMinutes());
    console.log(d.getSeconds());
    console.log(d.getMilliseconds());

    console.log(d.getTime()); // UTC 1970/01/01 00:00:00 からの経過ミリ秒

    const c = new Date(2018, 11); // 2018/12/01 00:00:00
    c.setHours(10, 20, 30); // 10時20分30秒をセット
    c.setDate(32); // 2019/01/01 10:20:30 繰越し
    c.setDate(c.getDate() + 3); // 今の日にちから三日後にセット
    console.log(c);


    const d1 = new Date(2018, 11, 1);
    const d2 = new Date(2018, 11, 10);
    // 計算すると、UTCからの経過ミリ秒に変換される
    console.log(d2 - d1); // 777600000
    
    // 1000でわって、秒数、60でわって分数、60でわって時間数、24でわって日数
    console.log((d2 - d1) / (24 * 60 * 60 * 1000));
}