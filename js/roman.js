
function あ() {
    Char.call(this);
    this.expectRomanArray = [
        ["a"]
    ];
}

あ.prototype = Object.create(Char.prototype);
あ.prototype.constructor = あ;

function じ() {
    Char.call(this);
    this.expectRomanArray = [
        ["j", "i"], ["z", "i"],
    ];
}

じ.prototype = Object.create(Char.prototype);
じ.prototype.constructor = じ;

function に() {
    Char.call(this);
    this.expectRomanArray = [
        ["n", "i"]
    ];
}

に.prototype = Object.create(Char.prototype);
に.prototype.constructor = に;

に.prototype.checkRoman = function(roman) {
    const result = Char.prototype.checkRoman(roman);
    if (result === ROMAN_NG) {
        if (this.nextChar !== null) {
            // todo
        }
        else {
            return ROMAN_NG;
        }
    }
}

function にゃ() {
    Char.call(this);
    this.expectRomanArray = [
        ["n", "y", "a"]
    ];
}

にゃ.prototype = Object.create(Char.prototype);
にゃ.prototype.constructor = にゃ;

function ぴ() {
    Char.call(this);
    this.expectRomanArray = [
        ["p", "i"]
    ];
}

ぴ.prototype = Object.create(Char.prototype);
ぴ.prototype.constructor = ぴ;

function ゃ() {
    Char.call(this);
    this.expectRomanArray = [
        ["x", "y", "a"]
    ];
}

ゃ.prototype = Object.create(Char.prototype);
ゃ.prototype.constructor = ゃ;

function ん() {
    Char.call(this);
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



