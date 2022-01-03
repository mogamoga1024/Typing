
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

function ぜ() {
    Char.call(this);
    this.expectRomanArray = [
        ["z", "e"],
    ];
}

ぜ.prototype = Object.create(Char.prototype);
ぜ.prototype.constructor = ぜ;

function た() {
    Char.call(this);
    this.expectRomanArray = [
        ["t", "a"],
    ];
}

た.prototype = Object.create(Char.prototype);
た.prototype.constructor = た;

function っ() {
    CharWithDerivations.call(this);
    this.expectRomanArray = [
        ["x", "t", "u"]
    ];
    this.relatedCharArray = [
        "った"
    ];
}

っ.prototype = Object.create(CharWithDerivations.prototype);
っ.prototype.constructor = っ;

function った() {
    Char.call(this);
    this.expectRomanArray = [
        ["t", "t", "a"],
    ];
}

った.prototype = Object.create(Char.prototype);
った.prototype.constructor = った;

function に() {
    CharWithDerivations.call(this);
    this.expectRomanArray = [
        ["n", "i"]
    ];
    this.relatedCharArray = [
        "にゃ"
    ];
}

に.prototype = Object.create(CharWithDerivations.prototype);
に.prototype.constructor = に;

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

function や() {
    Char.call(this);
    this.expectRomanArray = [
        ["y", "a"]
    ];
}

や.prototype = Object.create(Char.prototype);
や.prototype.constructor = や;

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



