
const TypingManager = {};

TypingManager.validRoman = function(roman) {
    return roman.match(/^([A-Za-z0-9]|!|\.|,)$/) !== null;
};

// サロゲートペア文字は考慮しない
TypingManager.createCharChain = function(text) {
    let firstChar = null;
    let preChar = null;
    for (let i = 0; i < text.length; i++) {
        const char = RomanFactory.create(text[i]);
        if (i === 0) {
            firstChar = char;
        }
        if (preChar != null) {
            preChar.nextChar = char;
        }
        preChar = char;
    }
    return firstChar;
};

