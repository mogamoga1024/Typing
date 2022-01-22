
function Text(text) {
    this.char = TypingManager.createCharChain(text);
    this.remainExpectRoman = "";

    let tmpChar = this.char;
    while (tmpChar !== null) {
        this.remainExpectRoman += tmpChar.expectRoman();
        tmpChar = tmpChar.nextChar;
    }
}

Text.prototype.inputRoman = function(roman) {
    if (this.char === null) return TEXT_COMPLETE;

    const result = this.char.inputRoman(roman);

    switch (result) {
        case CHAR_NG: return TEXT_NG;
        case CHAR_KEEP:
            this.updateExpectRoman(roman);
            return TEXT_KEEP;
        case CHAR_COMPLETE:
            this.char = this.char.nextChar;
            this.updateExpectRoman(roman);
            return this.char === null ? TEXT_COMPLETE : TEXT_KEEP;
        default:
            this.char = result;
            this.updateExpectRoman(roman);
            return TEXT_KEEP;
    }
};

Text.prototype.updateExpectRoman = function() {
    this.remainExpectRoman = this.remainExpectRoman.slice(1);
};
