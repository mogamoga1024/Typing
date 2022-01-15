
function っ() {
    Char.call(this, "っ", [["x", "t", "u"], ["l", "t", "u"]]);
    this.consecutiveRoman = [
        "b","c","d","f","g","h","j","k","l","m","p","q","r","s","t","v","w","x","y","z"
    ];
}

っ.prototype = Object.create(Char.prototype);
っ.prototype.constructor = っ;

っ.prototype.inputRoman = function(roman) {
    const result = Char.prototype.inputRoman.call(this, roman);
    if (result === ROMAN_NG) {
        if (this.nextChar == null) {
            return ROMAN_NG;
        }
        else if ($.inArray(roman, this.consecutiveRoman) === -1) {
            return ROMAN_NG;
        }
        else {
            const nextChar = RomanFactory.create(this.nextChar.name);
            if (nextChar.inputRoman(roman) === ROMAN_NG) {
                return ROMAN_NG;
            }
            else {
                return ROMAN_OK;
            }
        }
    }
    else {
        return result;
    }
};
