
/*
にんじん
んにゃぴ
やったぜ。
やじゅう
*/

// const hiraganaTextArray = [
//     "まずうちさぁ、おくじょうあんだけど、やいてかない？",
//     "あーいいっすねー",
//     "やじゅうのがんこう"
// ];

const textArray = [
    "あのイーハトーヴォのすきとほった風",
    "夏でも底に冷たさをもつ青いそら",
    "うつくしい森で飾られたモーリオ市",
    "郊外のぎらぎらひかる草の波"
];

const hiraganaTextArray = [
    "あのいーはとーヴぉのすきとほったかぜ",
    "なつでもそこにつめたさをもつあおいそら",
    "うつくしいもりでかざられたもーりおし",
    "こうがいのぎらぎらひかるくさのなみ"
];

const $typingText = $("#typing-text");
const $typedRoman = $("#typed");
const $notTypedRoman = $("#not-typed");

//const hiraganaTextArray = ["んにゃんぴっぴ"];
//const hiraganaTextArray = ["にゃん"];
// const hiraganaTextArray = ["じゃり"];

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
            break;
        case TEXT_KEEP:
            console.log("KEEP");
            updateExpectRoman(roman);
            break;
        case TEXT_COMPLETE:
            console.log("OK");
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

