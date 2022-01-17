
function Char(name, expectRomanArray, relatedCharArray) {
    this.name = name;
    this.nextChar = null;
    this.expectRomanArray = expectRomanArray;
    this.relatedCharArray = relatedCharArray === undefined ? [] : relatedCharArray;
    this.nextExpectRomanIndex = 0;
}

Char.prototype.inputRoman = function(roman) {
    const result = this.inputThisCharRoman(roman);

    if (result === CHAR_NG && this.relatedCharArray.length > 0 && this.nextChar !== null) {
        return this.inputDerivationCharRoman(roman);
    }
    else {
        return result;
    }
};

Char.prototype.inputThisCharRoman = function(roman) {
    const self = this;
    const tmpExpectRomanArray = this.expectRomanArray.filter(
        function(expectRoman) {
            return roman === expectRoman[self.nextExpectRomanIndex];
        }
    );

    if (tmpExpectRomanArray.length === 0) {
        return CHAR_NG;
    }

    this.expectRomanArray = tmpExpectRomanArray;
    this.nextExpectRomanIndex += 1;
    
    if (this.nextExpectRomanIndex < this.expectRomanArray[0].length) {
        return CHAR_KEEP;
    }
    
    return CHAR_COMPLETE;
};

Char.prototype.inputDerivationCharRoman = function(roman) {
    for (let i = 0; i < this.relatedCharArray.length; i++) {
        if (this.name + this.nextChar.name !== this.relatedCharArray[i]) {
            continue;
        }

        const char = CharFactory.create(this.relatedCharArray[i]);
        let isNG = false;
        for (let j = 0; j < this.nextExpectRomanIndex; j++) {
            if (char.inputRoman(this.expectRomanArray[0][j]) === CHAR_NG) {
                isNG = true;
                break;
            }
        }
        if (isNG) continue;

        const result = char.inputRoman(roman);
        if (result === CHAR_KEEP) {
            char.nextChar = this.nextChar.nextChar;
            return char;
        }
        else if (result === CHAR_COMPLETE) {
            return this.nextChar.nextChar;
        }
    }
    return CHAR_NG;
}