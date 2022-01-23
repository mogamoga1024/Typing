
function TypingGame() {
    this.okCount = 0;
    this.ngCount = 0;
    this.textIndex = 0;
    this.status = GAME_START;
    this.content = null;
    this.currentText = null;
    this.$typingText = $("#typing-text");
    this.$typedRoman = $("#typed");
    this.$notTypedRoman = $("#not-typed");
    this.$okCount = $("#ok-count");
    this.$ngCount = $("#ng-count");

    this.$typingText.text("タイピングゲーム");
    this.$notTypedRoman.text("F1, F2, F3キーを押すとゲームが始まります。");
    this.$okCount.text("0");
    this.$ngCount.text("0");
};

TypingGame.prototype.gameStart = function(index) {
    this.okCount = 0;
    this.ngCount = 0;
    this.textIndex = 0;
    this.status = GAME_PLAY;
    this.content = TypingContents.select(index);
    this.currentText = new Text(this.content.hiraganaTextArray[this.textIndex]);
    
    this.$typingText.text(this.content.textArray[this.textIndex]);
    this.$okCount.text("0");
    this.$ngCount.text("0");
    this.setupExpectRoman();
};

TypingGame.prototype.gameClear = function() {
    this.status = GAME_CLEAR;
    this.$typingText.text("Game Clear");
    this.$typedRoman.text("");
    this.$notTypedRoman.text("F1, F2, F3キーを押すとゲームが始まります。");
};

TypingGame.prototype.gamePlay = function(roman) {
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
            if (this.textIndex < this.content.hiraganaTextArray.length - 1) {
                this.currentText = new Text(this.content.hiraganaTextArray[++this.textIndex]);
                this.$typingText.text(this.content.textArray[this.textIndex]);
                this.setupExpectRoman();
            }
            else {
                this.gameClear();
            }
            break;
    }
};

TypingGame.prototype.keydown = function(e) {
    const key = e.key;

    switch (key) {
        case "F1": this.gameStart(0); return false;
        case "F2": this.gameStart(1); return false;
        case "F3": this.gameStart(2); return false;
    }

    if (this.status === GAME_PLAY) {
        this.gamePlay(key);
    }

    return true;
};

TypingGame.prototype.setupExpectRoman = function() {
    this.$typedRoman.text("");
    this.$notTypedRoman.text(this.currentText.remainExpectRoman);
};

TypingGame.prototype.updateExpectRoman = function(key) {
    this.$typedRoman.text(this.$typedRoman.text() + key);
    this.$notTypedRoman.text(this.currentText.remainExpectRoman);
};

