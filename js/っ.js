
function っ() {
    Char.call(this, "っ", ["xtu", "ltu", "ltsu"]);
}

っ.prototype = Object.create(Char.prototype);
っ.prototype.constructor = っ;

っ.prototype.inputRoman = function(roman) {
    const result = Char.prototype.inputRoman.call(this, roman);
    if (result !== ROMAN_NG) {
        return result;
    }

    if (this.nextChar == null) {
        return ROMAN_NG;
    }
    
    if (roman.match(/^(?=[a-z])(?!(a|i|u|e|o|n))$/) !== null) {
        return ROMAN_NG;
    }

    const nextChar = CharFactory.create(this.nextChar.name);
    if (nextChar.inputRoman(roman) === ROMAN_NG) {
        return ROMAN_NG;
    }
    
    return ROMAN_OK;
};
