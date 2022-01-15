
const CharFactory = {};

CharFactory.create = function(char) {
    switch (char) {
        // あ行
        case "あ": return new Char(char, ["a"]);
        case "い":
            return new CharWithDerivations(
                char, ["i", "yi"],
                ["いぇ"]
            );
        case "う": 
            return new CharWithDerivations(
                char, ["u", "wu", "whu"],
                ["うぁ", "うぃ", "うぇ", "うぉ"]
            );
        case "え": return new Char(char, ["e"]);
        case "お": return new Char(char, ["o"]);

        case "いぇ": return new Char(char, ["ye"]);

        case "うぁ": return new Char(char, ["wha"]);
        case "うぃ": return new Char(char, ["wi", "whi"]);
        case "うぇ": return new Char(char, ["we", "whe"]);
        case "うぉ": return new Char(char, ["who"]);

        case "ゐ": return new Char(char, ["wi"]);
        case "ゑ": return new Char(char, ["we"]);

        case "ぁ": return new Char(char, ["xa", "la"]);
        case "ぃ": return new Char(char, ["xi", "li", "xyi", "lyi"]);
        case "ぅ": return new Char(char, ["xu", "lu"]);
        case "ぇ": return new Char(char, ["xe", "le", "xye", "lye"]);
        case "ぉ": return new Char(char, ["xo", "lo"]);

        // か行

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
        case "ー": return new Char(char, ["-"]);
        case "！": return new Char(char, ["!"]);
        case "、": return new Char(char, [","]);
        case "。": return new Char(char, ["."]);
        default:
            throw new Error(char + "に対応するオブジェクトが存在しません。");
    }
};
