
const RomanFactory = {};

RomanFactory.create = function(char) {
    switch (char) {
        case "あ": return new Char(char, [["a"]]);
        case "じ": return new Char(char, [["j", "i"], ["z", "i"]]);
        case "ぜ": return new Char(char, [["z", "e"]]);
        case "た": return new Char(char, [["t", "a"]]);
        case "っ": return new CharWithDerivations(char, [["x", "t", "u"]], ["った"]);
        case "った": return new Char(char, [["t", "t", "a"]]);
        case "に": return new CharWithDerivations(char, [["n", "i"]], ["にゃ"]);
        case "にゃ": return new Char(char, [["n", "y", "a"]]);
        case "ぴ": return new Char(char, [["p", "i"]]);
        case "や": return new Char(char, [["y", "a"]]);
        case "ゃ": return new Char(char, [["x", "y", "a"]]);
        case "ん": return new ん();
        default:
            throw new Error(char + "に対応するオブジェクトが存在しません。");
    }
};
