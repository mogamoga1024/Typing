
function ん() {
    Char.call(this, "ん", ["nn", "n'", "xn"]);
}

ん.prototype = Object.create(Char.prototype);
ん.prototype.constructor = ん;

ん.prototype.inputRoman = function(roman) {
    const result = Char.prototype.inputRoman.call(this, roman);

    if (result !== CHAR_NG) {
        return result;
    }

    if (this.nextChar.inputRoman(roman) !== CHAR_NG) {
        this.nextExpectRomanIndex += 1;
        return CHAR_COMPLETE;
    }
    
    return CHAR_NG;
};
