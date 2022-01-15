
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
        case "か": return new Char(char, ["ka", "ca"]);
        case "き":
            return new CharWithDerivations(
                char, ["ki"],
                ["きゃ", "きぃ", "きゅ", "きぇ", "きょ"]
            );
        case "く":
            return new CharWithDerivations(
                char, ["ku", "cu", "qu"],
                ["くゃ", "くゅ", "くょ", "くぁ", "くぃ", "くぅ", "くぇ", "くぉ"]
            );
        case "け": return new Char(char, ["ke"]);
        case "こ": return new Char(char, ["ko", "co"]);

        case "きゃ": return new Char(char, ["kya"]);
        case "きぃ": return new Char(char, ["kyi"]);
        case "きゅ": return new Char(char, ["kyu"]);
        case "きぇ": return new Char(char, ["kye"]);
        case "きょ": return new Char(char, ["kyo"]);

        case "くゃ": return new Char(char, ["qya"]);
        case "くゅ": return new Char(char, ["qyu"]);
        case "くょ": return new Char(char, ["qyo"]);

        case "くぁ": return new Char(char, ["qa", "qwa", "kwa"]);
        case "くぃ": return new Char(char, ["qi", "qwi", "qyi"]);
        case "くぅ": return new Char(char, ["qwu"]);
        case "くぇ": return new Char(char, ["qe", "qwe", "qye"]);
        case "くぉ": return new Char(char, ["qo", "qwo"]);

        case "が": return new Char(char, ["ga"]);
        case "ぎ":
            return new CharWithDerivations(
                char, ["gi"],
                ["きゃ", "きぃ", "きゅ", "きぇ", "きょ"]
            );
        case "ぐ":
            return new CharWithDerivations(
                char, ["gu"],
                ["ぐぁ", "ぐぃ", "ぐぅ", "ぐぇ", "ぐぉ"]
            );
        case "げ": return new Char(char, ["ge"]);
        case "ご": return new Char(char, ["go"]);

        case "ぎゃ": return new Char(char, ["gya"]);
        case "ぎぃ": return new Char(char, ["gyi"]);
        case "ぎゅ": return new Char(char, ["gyu"]);
        case "ぎぇ": return new Char(char, ["gye"]);
        case "ぎょ": return new Char(char, ["gyo"]);

        case "ぐぁ": return new Char(char, ["gwa"]);
        case "ぐぃ": return new Char(char, ["gwi"]);
        case "ぐぅ": return new Char(char, ["gwu"]);
        case "ぐぇ": return new Char(char, ["gwe"]);
        case "ぐぉ": return new Char(char, ["gwo"]);

        case "ヵ": return new Char(char, ["xka", "lka"]);
        case "ヶ": return new Char(char, ["xke", "lke"]);

        // さ行
        case "さ": return new Char(char, ["sa"]);
        case "し": 
            return new CharWithDerivations(
                char, ["si", "ci", "shi"],
                ["しゃ", "しぃ", "しゅ", "しぇ", "しょ"]
            );
        case "す": 
            return new CharWithDerivations(
                char, ["su"],
                ["すぁ", "すぃ", "すぅ", "すぇ", "すぉ"]
            );
        case "せ": return new Char(char, ["se", "ce"]);
        case "そ": return new Char(char, ["so"]);

        case "しゃ": return new Char(char, ["sya", "sha"]);
        case "しぃ": return new Char(char, ["syi"]);
        case "しゅ": return new Char(char, ["syu", "shu"]);
        case "しぇ": return new Char(char, ["sye", "she"]);
        case "しょ": return new Char(char, ["syo", "sho"]);

        case "すぁ": return new Char(char, ["swa"]);
        case "すぃ": return new Char(char, ["swi"]);
        case "すぅ": return new Char(char, ["swu"]);
        case "すぇ": return new Char(char, ["swe"]);
        case "すぉ": return new Char(char, ["swo"]);

        case "ざ": return new Char(char, ["za"]);
        case "じ": 
            return new CharWithDerivations(
                char, ["zi", "ji"],
                ["じゃ", "じぃ", "じゅ", "じぇ", "じょ"]
            );
        case "ず": return new Char(char, ["zu"]);
        case "ぜ": return new Char(char, ["ze"]);
        case "ぞ": return new Char(char, ["zo"]);

        case "じゃ": return new Char(char, ["zya", "ja", "jya"]);
        case "じぃ": return new Char(char, ["zyi", "jyi"]);
        case "じゅ": return new Char(char, ["zyu", "ju", "jyu"]);
        case "じぇ": return new Char(char, ["zye", "je", "jye"]);
        case "じょ": return new Char(char, ["zyo", "jo", "jyo"]);

        // た行
        case "た": return new Char(char, ["ta"]);
        case "ち": return new CharWithDerivations(char, ["ti", "chi"]);
        case "つ": return new CharWithDerivations(char, ["tu", "tsu"]);
        case "て": return new CharWithDerivations(char, ["te"]);
        case "と": return new CharWithDerivations(char, ["to"]);


        // hogehoge...
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
