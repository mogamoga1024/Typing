
function っ() {
    CharWithDerivations.call(this);
    this.name = "っ";
    this.expectRomanArray = [
        ["x", "t", "u"]
    ];
    this.relatedCharArray = [
        "った"
    ];
}

っ.prototype = Object.create(CharWithDerivations.prototype);
っ.prototype.constructor = っ;

function に() {
    CharWithDerivations.call(this);
    this.name = "に";
    this.expectRomanArray = [
        ["n", "i"]
    ];
    this.relatedCharArray = [
        "にゃ"
    ];
}

に.prototype = Object.create(CharWithDerivations.prototype);
に.prototype.constructor = に;

function ん() {
    Char.call(this);
    this.name = "ん";
    this.expectRomanArray = [
        ["n", "n"]
    ];
    this.expectRoman = this.expectRomanArray[0];
}

ん.prototype = Object.create(Char.prototype);
ん.prototype.constructor = ん;

ん.prototype.checkRoman = function(roman) {
    if (this.nextExpectRomanIndex === 0) {
        if (roman === this.expectRoman[0]) {
            this.nextExpectRomanIndex += 1;
            return ROMAN_KEEP;
        }
        else {
            return ROMAN_NG;
        }
    }
    else {
        if (roman === this.expectRoman[1]) {
            this.nextExpectRomanIndex += 1;
            return ROMAN_OK;
        }
        else if (this.nextChar == null) {
            return ROMAN_NG;
        }
        else if (this.nextChar.checkRoman(roman) !== ROMAN_NG) {
            this.nextExpectRomanIndex += 1;
            return ROMAN_OK;
        }
        else {
            return ROMAN_NG;
        }
    }
};



