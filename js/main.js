'use strict';
{
    // クラス
    // メソッドに'function'はつけなくて良い
    class Player {
        constructor(name, score) {
            this.name  = name;
            this.score = score;
        }

        showInfo() {
            console.log(`name: ${this.name} score: ${this.score}`)
        }

        static showVersion() {
            console.log('player class ver. 1.0');
        }
    }

    // 継承
    class SoccerPlayer extends Player {
        constructor(name, score, number) {
            super(name, score); // 親クラスのコンストラクタを呼び出す
            this.number = number;
        }

        kick() {
            console.log('Gooooooaaaalll');
        }
    }

    const taguchi = new Player('taguchi', 32);
    const fkoji   = new Player('fkoji'  , 44);
    taguchi.showInfo();
    fkoji.showInfo();
    Player.showVersion();

    const tsubasa = new SoccerPlayer('tsubasa', 99, 10);
    console.log(tsubasa.number);
    tsubasa.showInfo();
    
}