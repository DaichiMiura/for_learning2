'use strict';
{
    // 配列
    const scores = [80, 90, 100];

    // オブジェクト(連想配列のようなもん)
    // コンマ区切りの一つ一つ、名前と値の組をプロパティ(メンバー)という
    const player = {
        name: 'taguchi',
        score: 32,
    }

    console.log(player['name']);
    console.log(player.name);

    player.score = 100; // 変更 player[score] = 100 でもOK

    // 値の追加
    player.email = 'taguchi@gmail.com';

    // 値の削除
    delete player.score;

    console.log(player);
}