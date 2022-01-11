
const RomanFactory = {};

RomanFactory.create = function(char) {
    switch (char) {
        case "あ": return new Char(char, [["a"]]);
        case "う": return new Char(char, [["u"]]);
        case "じ": return new CharWithDerivations(char, [["j", "i"], ["z", "i"]], ["じゅ"]);
        case "じゅ": return new Char(char, [["j", "u"], ["z", "y", "u"], ["j", "y", "u"]]);
        case "ぜ": return new Char(char, [["z", "e"]]);
        case "た": return new Char(char, [["t", "a"]]);
        case "っ": return new っ();
        case "に": return new CharWithDerivations(char, [["n", "i"]], ["にゃ"]);
        case "にゃ": return new Char(char, [["n", "y", "a"]]);
        case "ぴ": return new Char(char, [["p", "i"]]);
        case "や": return new Char(char, [["y", "a"]]);
        case "ゃ": return new Char(char, [["x", "y", "a"], ["l", "y", "a"]]);
        case "ゅ": return new Char(char, [["x", "y", "u"], ["l", "y", "u"]]);
        case "ん": return new ん();
        case "！": return new Char(char, [["!"]]);
        default:
            throw new Error(char + "に対応するオブジェクトが存在しません。");
    }
};
