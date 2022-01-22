
function ん() {
    Char.call(this, "ん", ["nn", "n'", "xn"]);
}

ん.prototype = Object.create(Char.prototype);
ん.prototype.constructor = ん;

ん.prototype.expectRoman = function() {
    if (this.nextChar === null) {
        return Char.prototype.expectRoman.call(this);
    }
    const nextCharFirstRoman = this.nextChar.expectRoman()[0];
    if (nextCharFirstRoman === "n" || nextCharFirstRoman === "'") {
        return Char.prototype.expectRoman.call(this);
    }
    if (
        this.nextExpectRomanIndex > 1 ||
        this.nextExpectRomanIndex === 1 && this.expectRomanArray[0][0] === "x"
    ) {
        return this.expectRomanArray[0];
    }
    return "n";
};

ん.prototype.inputRoman = function(roman) {
    const result = Char.prototype.inputRoman.call(this, roman);

    if (result !== CHAR_NG || this.nextExpectRomanIndex === 0 || this.nextChar === null) {
        return result;
    }

    const nextResult = this.nextChar.inputRoman(roman);

    switch (nextResult) {
        case CHAR_NG: return CHAR_NG;
        case CHAR_KEEP: return this.nextChar;
        case CHAR_COMPLETE: return this.nextChar.nextChar === null ? CHAR_COMPLETE : this.nextChar.nextChar;
    }
};
