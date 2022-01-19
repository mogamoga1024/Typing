
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

const textArray = ["んにゃんぴっぴ"];

let textIndex = 0;
let currentText = new Text(textArray[textIndex]);

$(window).keydown(function(e) {
    console.log(e.key);

    switch (currentText.inputRoman(e.key)) {
        case TEXT_NG:
            console.log("NG");
            break;
        case TEXT_KEEP:
            console.log("KEEP");
            break;
        case TEXT_COMPLETE:
            console.log("OK");
            if (textIndex < textArray.length - 1) {
                currentText = new Text(textArray[++textIndex]);
            }
            break;
    }
});



