
/*
にんじん
んにゃぴ
やったぜ。
やじゅう
*/

let currentChar = TypingManager.createCharChain("\"");

$(window).keydown(function(e) {
    if (TypingManager.validRoman(e.key) === false) {
        return true;
    }

    if (currentChar === null) return;

    const result = currentChar.inputRoman(e.key);
    if (result === ROMAN_NG) {
        console.log("違うよん", e.key);
    }
    else if (result === ROMAN_KEEP) {
        console.log("KEEP", e.key);
    }
    else if (result === ROMAN_OK) {
        console.log("OK", e.key);
        currentChar = currentChar.nextChar;
    }
    else {
        console.log("KEEP", e.key);
        currentChar = result;
    }
});



