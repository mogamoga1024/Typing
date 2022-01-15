
const RomanFactory = {};

RomanFactory.create = function(char) {
    switch (char) {
        case "あ": return new Char(char, ["a"]);
        case "う": return new Char(char, ["u"]);
        case "じ": return new CharWithDerivations(char, ["ji", "zi"], ["じゅ"]);
        case "じゅ": return new Char(char, ["ju", "zyu", "jyu"]);
        case "ぜ": return new Char(char, ["ze"]);
        case "た": return new Char(char, ["ta"]);
        case "っ": return new っ();
        case "に": return new CharWithDerivations(char, ["ni"], ["にゃ"]);
        case "にゃ": return new Char(char, ["nya"]);
        case "ぴ": return new Char(char, ["pi"]);
        case "や": return new Char(char, ["ya"]);
        case "ゃ": return new Char(char, ["xya", "lya"]);
        case "ゅ": return new Char(char, ["xyu", "lyu"]);
        case "ん": return new ん();
        case "！": return new Char(char, [["!"]]);
        default:
            throw new Error(char + "に対応するオブジェクトが存在しません。");
    }
};
