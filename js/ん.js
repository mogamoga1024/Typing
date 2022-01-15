
function ん() {
    Char.call(this, "ん", [["n", "n"]]);
}

ん.prototype = Object.create(Char.prototype);
ん.prototype.constructor = ん;

ん.prototype.inputRoman = function(roman) {
    if (this.nextExpectRomanIndex === 0) {
        if (roman === this.expectRomanArray[0][0]) {
            this.nextExpectRomanIndex += 1;
            return ROMAN_KEEP;
        }
        else {
            return ROMAN_NG;
        }
    }
    else {
        if (roman === this.expectRomanArray[0][1]) {
            this.nextExpectRomanIndex += 1;
            return ROMAN_OK;
        }
        else if (this.nextChar == null) {
            return ROMAN_NG;
        }
        else if (this.nextChar.inputRoman(roman) !== ROMAN_NG) {
            this.nextExpectRomanIndex += 1;
            return ROMAN_OK;
        }
        else {
            return ROMAN_NG;
        }
    }
};
