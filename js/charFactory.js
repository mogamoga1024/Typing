
const CharFactory = {};

CharFactory.create = function(char) {
    switch (char) {
        // あ行
        case "あ": return new Char(char, ["a"]);
        case "い": return new Char(char, ["i", "yi"]);
        case "う": return new Char(char, ["u", "wu", "whu"]);
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
        case "き": return new Char(char, ["ki"]);
        case "く": return new Char(char, ["ku", "cu", "qu"]);
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
        case "ぎ": return new Char(char, ["gi"]);
        case "ぐ": return new Char(char, ["gu"]);
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
        case "し": return new Char(char, ["si", "ci", "shi"]);
        case "す": return new Char(char, ["su"]);
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
        case "じ": return new Char(char, ["zi", "ji"]);
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
        case "ち": return new Char(char, ["ti", "chi"]);
        case "つ": return new Char(char, ["tu", "tsu"]);
        case "て": return new Char(char, ["te"]);
        case "と": return new Char(char, ["to"]);

        case "ちゃ": return new Char(char, ["tya", "cha", "cya"]);
        case "ちぃ": return new Char(char, ["tyi", "cyi"]);
        case "ちゅ": return new Char(char, ["tyu", "chu", "cyu"]);
        case "ちぇ": return new Char(char, ["tye", "che", "cye"]);
        case "ちょ": return new Char(char, ["tyo", "cho", "cyo"]);

        case "つぁ": return new Char(char, ["tsa"]);
        case "つぃ": return new Char(char, ["tsi"]);
        case "つぇ": return new Char(char, ["tse"]);
        case "つぉ": return new Char(char, ["tso"]);

        case "てゃ": return new Char(char, ["tha"]);
        case "てぃ": return new Char(char, ["thi"]);
        case "てゅ": return new Char(char, ["thu"]);
        case "てぇ": return new Char(char, ["the"]);
        case "てょ": return new Char(char, ["tho"]);

        case "とぁ": return new Char(char, ["twa"]);
        case "とぃ": return new Char(char, ["twi"]);
        case "とぅ": return new Char(char, ["twu"]);
        case "とぇ": return new Char(char, ["twe"]);
        case "とぉ": return new Char(char, ["two"]);

        case "だ": return new Char(char, ["da"]);
        case "ぢ": return new Char(char, ["di"]);
        case "づ": return new Char(char, ["du"]);
        case "で": return new Char(char, ["de"]);
        case "ど": return new Char(char, ["do"]);

        case "ぢゃ": return new Char(char, ["dya"]);
        case "ぢぃ": return new Char(char, ["dyi"]);
        case "ぢゅ": return new Char(char, ["dyu"]);
        case "ぢぇ": return new Char(char, ["dye"]);
        case "ぢょ": return new Char(char, ["dyo"]);

        case "でゃ": return new Char(char, ["dha"]);
        case "でぃ": return new Char(char, ["dhi"]);
        case "でゅ": return new Char(char, ["dhu"]);
        case "でぇ": return new Char(char, ["dhe"]);
        case "でょ": return new Char(char, ["dho"]);

        case "どぁ": return new Char(char, ["dwa"]);
        case "どぃ": return new Char(char, ["dwi"]);
        case "どぅ": return new Char(char, ["dwu"]);
        case "どぇ": return new Char(char, ["dwe"]);
        case "どぉ": return new Char(char, ["dwo"]);

        case "っ": return new っ();

        // な行
        case "な": return new Char(char, ["na"]);
        case "に": return new Char(char, ["ni"]);
        case "ぬ": return new Char(char, ["nu"]);
        case "ね": return new Char(char, ["ne"]);
        case "の": return new Char(char, ["no"]);

        case "にゃ": return new Char(char, ["nya"]);
        case "にぃ": return new Char(char, ["nyi"]);
        case "にゅ": return new Char(char, ["nyu"]);
        case "にぇ": return new Char(char, ["nye"]);
        case "にょ": return new Char(char, ["nyo"]);

        // は行
        case "は": return new Char(char, ["ha"]);
        case "ひ": return new Char(char, ["hi"]);
        case "ふ": return new Char(char, ["hu", "fu"]);
        case "へ": return new Char(char, ["he"]);
        case "ほ": return new Char(char, ["ho"]);

        case "ひゃ": return new Char(char, ["hya"]);
        case "ひぃ": return new Char(char, ["hyi"]);
        case "ひゅ": return new Char(char, ["hyu"]);
        case "ひぇ": return new Char(char, ["hye"]);
        case "ひょ": return new Char(char, ["hyo"]);

        case "ふぁ": return new Char(char, ["fa", "fwa"]);
        case "ふぃ": return new Char(char, ["fi", "fwi", "fyi"]);
        case "ふぅ": return new Char(char, ["fwu"]);
        case "ふぇ": return new Char(char, ["fe", "fwe", "fye"]);
        case "ふぉ": return new Char(char, ["fo", "fwo"]);

        case "ふゃ": return new Char(char, ["fya"]);
        case "ふゅ": return new Char(char, ["fyu"]);
        case "ふょ": return new Char(char, ["fyo"]);

        case "ば": return new Char(char, ["ba"]);
        case "び": return new Char(char, ["bi"]);
        case "ぶ": return new Char(char, ["bu"]);
        case "べ": return new Char(char, ["be"]);
        case "ぼ": return new Char(char, ["bo"]);

        case "びゃ": return new Char(char, ["bya"]);
        case "びぃ": return new Char(char, ["byi"]);
        case "びゅ": return new Char(char, ["byu"]);
        case "びぇ": return new Char(char, ["bye"]);
        case "びょ": return new Char(char, ["byo"]);

        case "ヴぁ": return new Char(char, ["va"]);
        case "ヴぃ": return new Char(char, ["vi", "vyi"]);
        case "ヴ": return new Char(char, ["vu"]);
        case "ヴぇ": return new Char(char, ["ve", "vye"]);
        case "ヴぉ": return new Char(char, ["vo"]);

        case "ヴゃ": return new Char(char, ["vya"]);
        case "ヴゅ": return new Char(char, ["vyu"]);
        case "ヴょ": return new Char(char, ["vyo"]);

        case "ぱ": return new Char(char, ["pa"]);
        case "ぴ": return new Char(char, ["pi"]);
        case "ぷ": return new Char(char, ["pu"]);
        case "ぺ": return new Char(char, ["pe"]);
        case "ぽ": return new Char(char, ["po"]);

        case "ぴゃ": return new Char(char, ["pya"]);
        case "ぴぃ": return new Char(char, ["pyi"]);
        case "ぴゅ": return new Char(char, ["pyu"]);
        case "ぴぇ": return new Char(char, ["pye"]);
        case "ぴょ": return new Char(char, ["pyo"]);

        // ま行
        case "ま": return new Char(char, ["ma"]);
        case "み": return new Char(char, ["mi"]);
        case "む": return new Char(char, ["mu"]);
        case "め": return new Char(char, ["me"]);
        case "も": return new Char(char, ["mo"]);

        case "みゃ": return new Char(char, ["mya"]);
        case "みぃ": return new Char(char, ["myi"]);
        case "みゅ": return new Char(char, ["myu"]);
        case "みぇ": return new Char(char, ["mye"]);
        case "みょ": return new Char(char, ["myo"]);

        // や行
        case "や": return new Char(char, ["ya"]);
        case "ゆ": return new Char(char, ["yu"]);
        case "よ": return new Char(char, ["yo"]);

        case "ゃ": return new Char(char, ["xya", "lya"]);
        case "ゅ": return new Char(char, ["xyu", "lyu"]);
        case "ょ": return new Char(char, ["xyo", "lyo"]);

        // ら行
        case "ら": return new Char(char, ["ra"]);
        case "り": return new Char(char, ["ri"]);
        case "る": return new Char(char, ["ru"]);
        case "れ": return new Char(char, ["re"]);
        case "ろ": return new Char(char, ["ro"]);

        case "りゃ": return new Char(char, ["rya"]);
        case "りぃ": return new Char(char, ["ryi"]);
        case "りゅ": return new Char(char, ["ryu"]);
        case "りぇ": return new Char(char, ["rye"]);
        case "りょ": return new Char(char, ["ryo"]);

        // わ行
        case "わ": return new Char(char, ["wa"]);
        case "を": return new Char(char, ["wo"]);
        case "ん": return new ん();

        case "ゎ": return new Char(char, ["xwa", "lwa"]);

        // アルファベット・数字
        case "a": return new Char(char, ["a"]);
        case "b": return new Char(char, ["b"]);
        case "c": return new Char(char, ["c"]);
        case "d": return new Char(char, ["d"]);
        case "e": return new Char(char, ["e"]);
        case "f": return new Char(char, ["f"]);
        case "g": return new Char(char, ["g"]);
        case "h": return new Char(char, ["h"]);
        case "i": return new Char(char, ["i"]);
        case "j": return new Char(char, ["j"]);
        case "k": return new Char(char, ["k"]);
        case "l": return new Char(char, ["l"]);
        case "m": return new Char(char, ["m"]);
        case "n": return new Char(char, ["n"]);
        case "o": return new Char(char, ["o"]);
        case "p": return new Char(char, ["p"]);
        case "q": return new Char(char, ["q"]);
        case "r": return new Char(char, ["r"]);
        case "s": return new Char(char, ["s"]);
        case "t": return new Char(char, ["t"]);
        case "u": return new Char(char, ["u"]);
        case "v": return new Char(char, ["v"]);
        case "w": return new Char(char, ["w"]);
        case "x": return new Char(char, ["x"]);
        case "y": return new Char(char, ["y"]);
        case "z": return new Char(char, ["z"]);

        case "A": return new Char(char, ["A"]);
        case "B": return new Char(char, ["B"]);
        case "C": return new Char(char, ["C"]);
        case "D": return new Char(char, ["D"]);
        case "E": return new Char(char, ["E"]);
        case "F": return new Char(char, ["F"]);
        case "G": return new Char(char, ["G"]);
        case "H": return new Char(char, ["H"]);
        case "I": return new Char(char, ["I"]);
        case "J": return new Char(char, ["J"]);
        case "K": return new Char(char, ["K"]);
        case "L": return new Char(char, ["L"]);
        case "M": return new Char(char, ["M"]);
        case "N": return new Char(char, ["N"]);
        case "O": return new Char(char, ["O"]);
        case "P": return new Char(char, ["P"]);
        case "Q": return new Char(char, ["Q"]);
        case "R": return new Char(char, ["R"]);
        case "S": return new Char(char, ["S"]);
        case "T": return new Char(char, ["T"]);
        case "U": return new Char(char, ["U"]);
        case "V": return new Char(char, ["V"]);
        case "W": return new Char(char, ["W"]);
        case "X": return new Char(char, ["X"]);
        case "Y": return new Char(char, ["Y"]);
        case "Z": return new Char(char, ["Z"]);

        case "0": return new Char(char, ["0"]);
        case "1": return new Char(char, ["1"]);
        case "2": return new Char(char, ["2"]);
        case "3": return new Char(char, ["3"]);
        case "4": return new Char(char, ["4"]);
        case "5": return new Char(char, ["5"]);
        case "6": return new Char(char, ["6"]);
        case "7": return new Char(char, ["7"]);
        case "8": return new Char(char, ["8"]);
        case "9": return new Char(char, ["9"]);

        // 記号
        case "ー": return new Char(char, ["-"]);
        case "！": return new Char(char, ["!"]);
        case "？": return new Char(char, ["?"]);
        case "'": return new Char(char, ["'"]);
        case "\"": return new Char(char, ["\""]);
        case "、": return new Char(char, [","]);
        case "。": return new Char(char, ["."]);
        default: return null;
    }
};
