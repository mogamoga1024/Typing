
function ん() {
    Char.call(this, "ん", ["nn", "n'", "xn"]);
}

ん.prototype = Object.create(Char.prototype);
ん.prototype.constructor = ん;

ん.prototype.remainExpectRoman = function() {
    if (this.nextChar === null) {
        return Char.prototype.remainExpectRoman.call(this);
    }
    const nextCharFirstRoman = this.nextChar.remainExpectRoman()[0];
    if (nextCharFirstRoman === "n" || nextCharFirstRoman === "'") {
        return Char.prototype.remainExpectRoman.call(this);
    }
    return "n";
};

ん.prototype.inputRoman = function(roman) {
    const result = Char.prototype.inputRoman.call(this, roman);

    if (result !== CHAR_NG || this.nextExpectRomanIndex == 0) {
        return result;
    }

    if (this.nextChar.inputRoman(roman) !== CHAR_NG) {
        this.nextExpectRomanIndex += 1;
        return CHAR_COMPLETE;
    }
    
    return CHAR_NG;
};
