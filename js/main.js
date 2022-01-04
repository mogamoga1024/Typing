
/*
const charArray = [
    RomanFactory.create("に"),
    RomanFactory.create("ん"),
    RomanFactory.create("じ"),
    RomanFactory.create("ん")
];

charArray[0].nextChar = charArray[1];
charArray[1].nextChar = charArray[2];
charArray[2].nextChar = charArray[3];
*/
/*
const charArray = [
    RomanFactory.create("ん"),
    RomanFactory.create("に"),
    RomanFactory.create("ゃ"),
    RomanFactory.create("ぴ")
];

charArray[0].nextChar = charArray[1];
charArray[1].nextChar = charArray[2];
charArray[2].nextChar = charArray[3];
*/
/*
const charArray = [
    RomanFactory.create("や"),
    RomanFactory.create("っ"),
    RomanFactory.create("た"),
    RomanFactory.create("ぜ")
];

charArray[0].nextChar = charArray[1];
charArray[1].nextChar = charArray[2];
charArray[2].nextChar = charArray[3];
*/
const charArray = [
    RomanFactory.create("や"),
    RomanFactory.create("じ"),
    RomanFactory.create("ゅ"),
    RomanFactory.create("う")
];

charArray[0].nextChar = charArray[1];
charArray[1].nextChar = charArray[2];
charArray[2].nextChar = charArray[3];

let currentChar = charArray[0];

$(window).keydown(function(e) {
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



