
const ROMAN_NG = 0;
const ROMAN_KEEP = 1;
const ROMAN_OK = 2;

function あ() {
    this.nextChar = null;
    this._inputRoman = [];
    this._expectRomanArray = [["a"]];
}

あ.prototype.checkRoman = function(roman) {
    if (roman === this._expectRomanArray[0][0]) {
        return ROMAN_OK;
    }
    return ROMAN_NG;
};

function じ() {
    this.nextChar = null;
    this._expectRomanArray = [
        ["j", "i"], ["z", "i"],
    ];
    this._nextExpectRomanIndex = 0;
    this._expectRoman = null;
}

じ.prototype.checkRoman = function(roman) {
    if (this._nextExpectRomanIndex === 0) {
        for (let i = 0; i < this._expectRomanArray.length; i++) {
            if (roman === this._expectRomanArray[i][0]) {
                this._nextExpectRomanIndex += 1;
                this._expectRoman = this._expectRomanArray[i];
                if (this._nextExpectRomanIndex < this._expectRoman.length) {
                    return ROMAN_KEEP;
                }
                else {
                    return ROMAN_OK;
                }
            }
        }
    }
    else {
        if (roman === this._expectRoman[this._nextExpectRomanIndex]) {
            this._nextExpectRomanIndex += 1;
            if (this._nextExpectRomanIndex < this._expectRoman.length) {
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

function に() {
    this.nextChar = null;
    this._inputRoman = [];
    this._expectRomanArray = [["n", "i"]];
}

に.prototype.checkRoman = function(roman) {
    if (roman === this._expectRomanArray[0][0]) {
        this._inputRoman.push(roman);
        return ROMAN_KEEP;
    }
    else {
        if (roman === this._expectRomanArray[0][1]) {
            return ROMAN_OK;
        }
        else {
            return ROMAN_NG;
        }
    }
};

function ん() {
    this.nextChar = null;
    this._inputRoman = [];
    this._expectRomanArray = [["n", "n"]];
}

ん.prototype.checkRoman = function(roman) {
    if (this._inputRoman.length === 0) {
        if (roman === this._expectRomanArray[0][0]) {
            this._inputRoman.push(roman);
            return ROMAN_KEEP;
        }
    }
    else {
        if (roman === this._expectRomanArray[0][1]) {
            return ROMAN_OK;
        }
        else if (this.nextChar == null) {
            return ROMAN_NG;
        }
        else if (this.nextChar.checkRoman(roman) !== ROMAN_NG) {
            return ROMAN_OK;
        }
        else {
            return ROMAN_NG;
        }
    }
};



