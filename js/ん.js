
function ん() {
    Char.call(this, "ん", ["nn"]);
}

ん.prototype = Object.create(Char.prototype);
ん.prototype.constructor = ん;

ん.prototype.inputRoman = function(roman) {
    if (this.nextExpectRomanIndex === 0) {
        if (roman === this.expectRomanArray[0][0]) {
            this.nextExpectRomanIndex += 1;
            return ROMAN_KEEP;
        }
        return ROMAN_NG;
    }
    
    if (roman === this.expectRomanArray[0][1]) {
        this.nextExpectRomanIndex += 1;
        return ROMAN_OK;
    }

    if (this.nextChar == null) {
        return ROMAN_NG;
    }

    if (this.nextChar.inputRoman(roman) !== ROMAN_NG) {
        this.nextExpectRomanIndex += 1;
        return ROMAN_OK;
    }
    
    return ROMAN_NG;
};
