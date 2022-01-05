
const ROMAN_NG = 0;
const ROMAN_KEEP = 1;
const ROMAN_OK = 2;

function Char(name, expectRomanArray) {
    this.name = name;
    this.nextChar = null;
    this.expectRomanArray = expectRomanArray;
    this.nextExpectRomanIndex = 0;
}

Char.prototype.inputRoman = function(roman) {
    
    const self = this;
    const tmpExpectRomanArray = this.expectRomanArray.filter(
        function(expectRoman) {
            return roman === expectRoman[self.nextExpectRomanIndex];
        }
    );

    if (tmpExpectRomanArray.length !== 0) {
        this.expectRomanArray = tmpExpectRomanArray;
        this.nextExpectRomanIndex += 1;
        if (this.nextExpectRomanIndex < this.expectRomanArray[0].length) {
            return ROMAN_KEEP;
        }
        else {
            return ROMAN_OK;
        }
    }
    else {
        return ROMAN_NG;
    }
};

function CharWithDerivations(name, expectRomanArray, relatedCharArray) {
    Char.call(this, name, expectRomanArray);
    this.relatedCharArray = relatedCharArray;
}

CharWithDerivations.prototype = Object.create(Char.prototype);
CharWithDerivations.prototype.constructor = CharWithDerivations;

CharWithDerivations.prototype.inputRoman = function(roman) {
    const result = Char.prototype.inputRoman.call(this, roman);
    if (result === ROMAN_NG) {
        if (this.nextChar !== null) {
            for (let i = 0; i < this.relatedCharArray.length; i++) {
                if (this.name + this.nextChar.name !== this.relatedCharArray[i]) {
                    continue;
                }
                const char = RomanFactory.create(this.relatedCharArray[i]);
                let maybeOk = true;
                for (let j = 0; j < this.nextExpectRomanIndex; j++) {
                    if (char.inputRoman(this.expectRomanArray[0][j]) === ROMAN_NG) {
                        maybeOk = false;
                        break;
                    }
                }
                if (maybeOk) {
                    const result = char.inputRoman(roman);
                    if (result === ROMAN_KEEP) {
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

