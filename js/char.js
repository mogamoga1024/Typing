
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

    if (tmpExpectRomanArray.length === 0) {
        return ROMAN_NG;
    }

    this.expectRomanArray = tmpExpectRomanArray;
    this.nextExpectRomanIndex += 1;
    
    if (this.nextExpectRomanIndex < this.expectRomanArray[0].length) {
        return ROMAN_KEEP;
    }
    
    return ROMAN_OK;
};
