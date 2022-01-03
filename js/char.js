
const ROMAN_NG = 0;
const ROMAN_KEEP = 1;
const ROMAN_OK = 2;

function Char() {
    this.nextChar = null;
    this.expectRomanArray = [];
    this.nextExpectRomanIndex = 0;
    this.expectRoman = null;
}

Char.prototype.checkRoman = function(roman) {
    if (this.nextExpectRomanIndex === 0) {
        for (let i = 0; i < this.expectRomanArray.length; i++) {
            if (roman === this.expectRomanArray[i][0]) {
                this.nextExpectRomanIndex += 1;
                this.expectRoman = this.expectRomanArray[i];
                if (this.nextExpectRomanIndex < this.expectRoman.length) {
                    return ROMAN_KEEP;
                }
                else {
                    return ROMAN_OK;
                }
            }
        }
        return ROMAN_NG;
    }
    else {
        if (roman === this.expectRoman[this.nextExpectRomanIndex]) {
            this.nextExpectRomanIndex += 1;
            if (this.nextExpectRomanIndex < this.expectRoman.length) {
                return ROMAN_KEEP;
            }
            else {
                return ROMAN_OK;
            }
        }
        else {
            return ROMAN_NG;
        }
    }
};
