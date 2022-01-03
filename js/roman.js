
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
    Char.call(this);
    this.expectRomanArray = [
        ["x", "t", "u"],
    ];
}

っ.prototype = Object.create(Char.prototype);
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
    Char.call(this);
    this.expectRomanArray = [
        ["n", "i"]
    ];
    this.relatedCharArray = [
        "にゃ"
    ];
}

に.prototype = Object.create(Char.prototype);
に.prototype.constructor = に;

に.prototype.checkRoman = function(roman) {
    const result = Char.prototype.checkRoman.call(this, roman);
    if (result === ROMAN_NG) {
        if (this.nextChar !== null) {
            for (let i = 0; i < this.relatedCharArray.length; i++) {
                // todo
                if (this.constructor.name + this.nextChar.constructor.name !== this.relatedCharArray[i]) {
                    continue;
                }
                const char = RomanFactory.create(this.relatedCharArray[i]);
                for (let j = 0; j < this.nextExpectRomanIndex; j++) {
                    if (char.checkRoman(this.expectRoman[j]) === ROMAN_NG) {
                        break;
                    }
                    if (j === this.nextExpectRomanIndex - 1) {
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



