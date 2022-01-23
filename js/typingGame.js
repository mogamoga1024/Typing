
function TypingGame() {
    this.okCount = 0;
    this.ngCount = 0;
    this.textIndex = 0;
    this.currentText = new Text(hiraganaTextArray[this.textIndex]);

    this.$typingText = $("#typing-text");
    this.$typedRoman = $("#typed");
    this.$notTypedRoman = $("#not-typed");
    this.$okCount = $("#ok-count");
    this.$ngCount = $("#ng-count");

    this.$typingText.text(textArray[this.textIndex]);
    this.setupExpectRoman();
};

TypingGame.prototype.inputRoman = function(roman) {
    if (TypingManager.validRoman(roman) === false) return;

    switch (this.currentText.inputRoman(roman)) {
        case TEXT_NG:
            console.log(roman, "NG");
            this.$ngCount.text(++this.ngCount);
            break;
        case TEXT_KEEP:
            console.log(roman, "KEEP");
            this.$okCount.text(++this.okCount);
            this.updateExpectRoman(roman);
            break;
        case TEXT_COMPLETE:
            console.log(roman, "OK");
            this.$okCount.text(++this.okCount);
            this.updateExpectRoman(roman);
            if (this.textIndex < hiraganaTextArray.length - 1) {
                this.currentText = new Text(hiraganaTextArray[++this.textIndex]);
                this.$typingText.text(textArray[this.textIndex]);
                this.setupExpectRoman();
            }
            break;
    }
};

TypingGame.prototype.setupExpectRoman = function() {
    this.$typedRoman.text("");
    this.$notTypedRoman.text(this.currentText.remainExpectRoman);
};

TypingGame.prototype.updateExpectRoman = function(key) {
    this.$typedRoman.text(this.$typedRoman.text() + key);
    this.$notTypedRoman.text(this.currentText.remainExpectRoman);
};

