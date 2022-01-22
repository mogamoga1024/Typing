
// const textArray = [
//     "っぴ",
//     "んこんこ"
// ];

// const hiraganaTextArray = [
//     "っぴ",
//     "んこんこ"
// ];

// const textArray = [
//     "んこんこ"
// ];

// const hiraganaTextArray = [
//     "んこんこ"
// ];

// const textArray = [
//     "あのイーハトーヴォのすきとほった風",
//     "夏でも底に冷たさをもつ青いそら",
//     "うつくしい森で飾られたモーリオ市",
//     "郊外のぎらぎらひかる草の波"
// ];

// const hiraganaTextArray = [
//     "あのいーはとーヴぉのすきとほったかぜ",
//     "なつでもそこにつめたさをもつあおいそら",
//     "うつくしいもりでかざられたもーりおし",
//     "こうがいのぎらぎらひかるくさのなみ"
// ];

const textArray = [
    "お母さんゎね",
    "本当ゎ虐待おばさんだったんだよ",
    "小さい頃ゎ",
    "可愛がって育てられた拓也だけど",
    "なぜか夫婦仲が悪くなって",
    "離婚した",
    "したら",
    "こんな子産まなきゃ良かった！",
    "って",
    "虐待が始まったんだ",
    "それで拓也ゎぐれて不良になったんだ",
    "学校でゎ子分たくさん引き連れていたけどね",
    "先生に殴られて",
    "家でも殴られて",
    "一人になると毎日泣いてた",
    "中学に上がったら",
    "オマエ生意気だぞって",
    "年長の不良グループにイジめられて",
    "しょっちゅうボコボコにされてた",
    "だからオレ",
    "いる場所がなくて",
    "それで水泳部に入ったんだ",
    "水の中なら全てが忘れられる",
    "青いプールが大好きだった",
    "でもって",
    "なるべく遅くに帰宅して",
    "冷えた飯食って",
    "夜になると同い年の不良がやって来て",
    "部屋の窓ガラスに極小の石を投げつけると「ピシッ」って音がするから",
    "そっと家を飛び出して遊び歩いてた。",
    "お母さんさんのことゎ",
    "ずっと心底、大嫌いだった",
    "けどね、",
    "母が入院して",
    "オレしか頼る人がいなくて",
    "急に思ったんだよ",
    "最初の１０年間ゎ",
    "大事にしてくれた",
    "だから",
    "１０年分の愛ゎ",
    "お返ししなきゃってね！",
    "だから",
    "入院した時に",
    "初めて思った。",
    "お母さん、今死んじゃだめだよ!!",
    "絶対に死ぬなよ!!",
    "オレが絶対に寂しくさせないからねって"
];

const hiraganaTextArray = [
    "おかあさんゎね",
    "ほんとうゎぎゃくたいおばさんだったんだよ",
    "ちいさいころゎ",
    "かわいがってそだてられたたくやだけど",
    "なぜかふうふなかがわるくなって",
    "りこんした",
    "したら",
    "こんなこうまなきゃよかった！",
    "って",
    "ぎゃくたいがはじまったんだ",
    "それでたくやゎぐれてふりょうになったんだ",
    "がっこうでゎこぶんたくさんひきつれていたけどね",
    "せんせいになぐられて",
    "いえでもなぐられて",
    "ひとりになるとまいにちないてた",
    "ちゅうがくにあがったら",
    "オマエなまいきだぞって",
    "ねんちょうのふりょうグループにイジめられて",
    "しょっちゅうボコボコにされてた",
    "だからオレ",
    "いるばしょがなくて",
    "それですいえいぶにはいったんだ",
    "みずのなかならすべてがわすれられる",
    "あおいプールがだいすきだった",
    "でもって",
    "なるべくおそくにきたくして",
    "ひえためしくって",
    "よるになるとおないどしのふりょうがやってきて",
    "へやのまどがらすにきょくしょうのいしをなげつけると「ピシッ」っておとがするから",
    "そっといえをとびだしてあそびあるいてた。",
    "おかあさんさんのことゎ",
    "ずっとしんそこ、だいきらいだった",
    "けどね、",
    "ははがにゅういんして",
    "オレしかたよるひとがいなくて",
    "きゅうにおもったんだよ",
    "さいしょの１０ねんかんゎ",
    "だいじにしてくれた",
    "だから",
    "１０ねんぶんのあいゎ",
    "おかえししなきゃってね！",
    "だから",
    "にゅういんしたときに",
    "はじめておもった。",
    "おかあさん、いましんじゃだめだよ！！",
    "ぜったいにしぬなよ！！",
    "オレがぜったいにさびしくさせないからねって"
];

const $typingText = $("#typing-text");
const $typedRoman = $("#typed");
const $notTypedRoman = $("#not-typed");
const $okCount = $("#ok-count");
const $ngCount = $("#ng-count");

let okCount = 0;
let ngCount = 0;

let textIndex = 0;
let currentText = new Text(hiraganaTextArray[textIndex]);

$typingText.text(textArray[textIndex]);
setupExpectRoman();

$(window).keydown(function(e) {
    const roman = e.key;

    console.log(roman);

    if (TypingManager.validRoman(roman) === false) return;

    switch (currentText.inputRoman(roman)) {
        case TEXT_NG:
            console.log("NG");
            $ngCount.text(++ngCount);
            break;
        case TEXT_KEEP:
            console.log("KEEP");
            $okCount.text(++okCount);
            updateExpectRoman(roman);
            break;
        case TEXT_COMPLETE:
            console.log("OK");
            $okCount.text(++okCount);
            updateExpectRoman(roman);
            if (textIndex < hiraganaTextArray.length - 1) {
                currentText = new Text(hiraganaTextArray[++textIndex]);
                $typingText.text(textArray[textIndex]);
                setupExpectRoman();
            }
            break;
    }
});

function setupExpectRoman() {
    $typedRoman.text("");
    $notTypedRoman.text(currentText.remainExpectRoman);
}

function updateExpectRoman(key) {
    $typedRoman.text($typedRoman.text() + key);
    $notTypedRoman.text(currentText.remainExpectRoman);
}

