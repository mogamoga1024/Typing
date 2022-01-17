
function Text(text) {
    this.char = TypingManager.createCharChain(text);
}

Text.prototype.inputRoman = function(roman) {
    if (this.char === null) return TEXT_COMPLETE;

    if (TypingManager.validRoman(roman) === false) {
        return TEXT_KEEP;
    }

    const result = this.char.inputRoman(roman);

    switch (result) {
        case CHAR_NG: return TEXT_NG;
        case CHAR_KEEP: return TEXT_KEEP;
        case CHAR_COMPLETE:
            this.char = this.char.nextChar;
            return this.char === null ? TEXT_COMPLETE : TEXT_KEEP;
        default:
            this.char = result;
            return TEXT_KEEP;
    }
};


