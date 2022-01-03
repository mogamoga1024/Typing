
const ROMAN_NG = 0;
const ROMAN_KEEP = 1;
const ROMAN_OK = 2;

function Char(name, expectRomanArray) {
    this.name = name;
    this.nextChar = null;
    this.expectRomanArray = expectRomanArray;
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

function CharWithDerivations() {
    Char.call(this);
    this.relatedCharArray = [];
}

CharWithDerivations.prototype = Object.create(Char.prototype);
CharWithDerivations.prototype.constructor = CharWithDerivations;

CharWithDerivations.prototype.checkRoman = function(roman) {
    const result = Char.prototype.checkRoman.call(this, roman);
    if (result === ROMAN_NG) {
        if (this.nextChar !== null) {
            for (let i = 0; i < this.relatedCharArray.length; i++) {
                if (this.name + this.nextChar.name !== this.relatedCharArray[i]) {
                    continue;
                }
                const char = RomanFactory.create(this.relatedCharArray[i]);
                let maybeOk = true;
                for (let j = 0; j < this.nextExpectRomanIndex; j++) {
                    if (char.checkRoman(this.expectRoman[j]) === ROMAN_NG) {
                        maybeOk = false;
                        break;
                    }
                }
                if (maybeOk) {
                    const result = char.checkRoman(roman);
                    if (result === ROMAN_NG) {
                        return ROMAN_NG;
                    }
                    else if (result === ROMAN_KEEP) {
                        char.nextChar = this.nextChar.nextChar;
                        return char;
                    }
                    else if (result === ROMAN_OK) {
                        return this.nextChar.nextChar;
                    }
                }
            }
            return ROMAN_NG;
        }
        else {
            return ROMAN_NG;
        }
    }
    else {
        return result;
    }
}

