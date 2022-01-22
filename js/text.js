
function Text(text) {
    this.char = TypingManager.createCharChain(text);
    this.remainExpectRoman = "";

    let tmpChar = this.char;
    while (tmpChar !== null) {
        this.remainExpectRoman += tmpChar.remainExpectRoman();
        tmpChar = tmpChar.nextChar;
    }
}

Text.prototype.inputRoman = function(roman) {
    if (this.char === null) return TEXT_COMPLETE;

    const oldCharRemainExpectRomanLength = this.char.remainExpectRoman().length;
    const result = this.char.inputRoman(roman);

    switch (result) {
        case CHAR_NG: return TEXT_NG;
        case CHAR_KEEP:
            this.updateExpectRoman(oldCharRemainExpectRomanLength);
            return TEXT_KEEP;
        case CHAR_COMPLETE:
            const preChar = this.char;
            this.char = this.char.nextChar;
            this.updateExpectRoman(oldCharRemainExpectRomanLength, preChar);
            return this.char === null ? TEXT_COMPLETE : TEXT_KEEP;
        default:
            const oldChar = this.char;
            this.char = result;
            this.updateExpectRoman(oldChar);
            return TEXT_KEEP;
    }
};

Text.prototype.updateExpectRoman = function(param, preChar) {
    switch (typeof(param)) {
        case "number":
            const oldCharRemainExpectRomanLength = param;
            if (preChar === undefined) {
                const charRemainExpectRoman = this.char.remainExpectRoman();
                if (oldCharRemainExpectRomanLength === charRemainExpectRoman.length) {
                    this.remainExpectRoman = this.remainExpectRoman.slice(1);
                }
                else {
                    const removeRomanCount = oldCharRemainExpectRomanLength - this.char.nextExpectRomanIndex + 1;
                    this.remainExpectRoman = charRemainExpectRoman.slice(this.char.nextExpectRomanIndex) + this.remainExpectRoman.slice(removeRomanCount);
                }
            }
            else {
                const charRemainExpectRoman = preChar.remainExpectRoman();
                if (oldCharRemainExpectRomanLength === charRemainExpectRoman.length) {
                    this.remainExpectRoman = this.remainExpectRoman.slice(1);
                }
                else {
                    const removeRomanCount = oldCharRemainExpectRomanLength - preChar.nextExpectRomanIndex + 1;
                    this.remainExpectRoman = this.remainExpectRoman.slice(removeRomanCount);
                }
            }
            break;
        case "object":
            const oldChar = param;
            let tmpRemainExpectRoman1 = "";
            const tmpRemainExpectRoman2 = this.remainExpectRoman.slice(
                oldChar.remainExpectRoman().length - oldChar.nextExpectRomanIndex
            );
            let tmpChar = this.char;
            while (true) {
                tmpRemainExpectRoman1 += tmpChar.remainExpectRoman();
                if (tmpChar.nextChar !== oldChar.nextChar) break;
                tmpChar = tmpChar.nextChar;
                if (tmpChar.nextChar !== oldChar.nextChar) break;
            }
            this.remainExpectRoman = tmpRemainExpectRoman1 + tmpRemainExpectRoman2;
            break;
    }
};
