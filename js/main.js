
/*
にんじん
んにゃぴ
やったぜ。
やじゅう
*/

// const textArray = [
//     "まずうちさぁ、おくじょうあんだけど、やいてかない？",
//     "あーいいっすねー",
//     "やじゅうのがんこう"
// ];

const $typingText = $("#typing-text");
const $typedRoman = $("#typed");
const $notTypedRoman = $("#not-typed");

//const textArray = ["んにゃんぴっぴ"];
//const textArray = ["にゃん"];
const textArray = ["じゃり"];

let textIndex = 0;
let currentText = new Text(textArray[textIndex]);

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
            if (textIndex < textArray.length - 1) {
                currentText = new Text(textArray[++textIndex]);
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

