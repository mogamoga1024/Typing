
function っ() {
    Char.call(this, "っ", ["xtu", "ltu", "ltsu"]);
    this.regex = /^(?=[a-z])(?!(a|i|u|e|o|n))$/;
}

っ.prototype = Object.create(Char.prototype);
っ.prototype.constructor = っ;

っ.prototype.remainExpectRoman = function() {
    if (this.nextChar === null) {
        return Char.prototype.remainExpectRoman.call(this);
    }
    if (this.nextExpectRomanIndex > 0) {
        return this.expectRomanArray[0];
    }
    const nextCharFirstRoman = this.nextChar.remainExpectRoman()[0];
    if (nextCharFirstRoman.match(this.regex) === null) {
        return nextCharFirstRoman;
    }
    return Char.prototype.remainExpectRoman.call(this);
};

っ.prototype.inputRoman = function(roman) {
    const result = Char.prototype.inputRoman.call(this, roman);
    if (result !== CHAR_NG) {
        return result;
    }

    if (this.nextChar == null) {
        return CHAR_NG;
    }
    
    if (roman.match(this.regex) !== null) {
        return CHAR_NG;
    }

    const nextChar = CharFactory.create(this.nextChar.name);
    if (nextChar.inputRoman(roman) === CHAR_NG) {
        return CHAR_NG;
    }
    
    return CHAR_COMPLETE;
};
