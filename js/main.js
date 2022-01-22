
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

const textArray = ["んにゃんぴっぴ"];

let textIndex = 0;
let currentText = new Text(textArray[textIndex]);

$typingText.text(textArray[textIndex]);
setupExpectRoman();

$(window).keydown(function(e) {
    console.log(e.key);

    switch (currentText.inputRoman(e.key)) {
        case TEXT_NG:
            console.log("NG");
            break;
        case TEXT_KEEP:
            console.log("KEEP");
            updateExpectRoman(e.key);
            break;
        case TEXT_COMPLETE:
            console.log("OK");
            updateExpectRoman(e.key);
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
    $notTypedRoman.text(currentText.remainExpectRoman());
}

function updateExpectRoman(key) {
    $typedRoman.text($typedRoman.text() + key);
    $notTypedRoman.text(currentText.remainExpectRoman());
}

