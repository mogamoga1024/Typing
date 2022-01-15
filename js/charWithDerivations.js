
function CharWithDerivations(name, expectRomanArray, relatedCharArray) {
    Char.call(this, name, expectRomanArray);
    this.relatedCharArray = relatedCharArray;
}

CharWithDerivations.prototype = Object.create(Char.prototype);
CharWithDerivations.prototype.constructor = CharWithDerivations;

CharWithDerivations.prototype.inputRoman = function(roman) {
    const result = Char.prototype.inputRoman.call(this, roman);

    if (result !== ROMAN_NG) {
        return result;
    }
    if (this.nextChar === null) {
        return ROMAN_NG;
    }

    for (let i = 0; i < this.relatedCharArray.length; i++) {
        if (this.name + this.nextChar.name !== this.relatedCharArray[i]) {
            continue;
        }

        const char = RomanFactory.create(this.relatedCharArray[i]);
        let isNG = false;
        for (let j = 0; j < this.nextExpectRomanIndex; j++) {
            if (char.inputRoman(this.expectRomanArray[0][j]) === ROMAN_NG) {
                isNG = true;
                break;
            }
        }
        if (isNG) continue;

        const result = char.inputRoman(roman);
        if (result === ROMAN_KEEP) {
            char.nextChar = this.nextChar.nextChar;
            return char;
        }
        else if (result === ROMAN_OK) {
            return this.nextChar.nextChar;
        }
    }
    return ROMAN_NG;
}