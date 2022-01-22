
const CharFactory = {};

CharFactory.create = function(char) {
    switch (char) {
        // あ行: 
        case "あ": case "ア": return new Char(char, ["a"]);
        case "い": case "イ": return new Char(char, ["i", "yi"]);
        case "う": case "ウ": return new Char(char, ["u", "wu", "whu"]);
        case "え": case "エ": return new Char(char, ["e"]);
        case "お": case "オ": return new Char(char, ["o"]);

        case "いぇ": case "イェ": return new Char(char, ["ye"]);

        case "うぁ": case "ウァ": return new Char(char, ["wha"]);
        case "うぃ": case "ウィ": return new Char(char, ["wi", "whi"]);
        case "うぇ": case "ウェ": return new Char(char, ["we", "whe"]);
        case "うぉ": case "ウォ": return new Char(char, ["who"]);

        case "ゐ": case "ヰ": return new Char(char, ["wi"]);
        case "ゑ": case "ヱ": return new Char(char, ["we"]);

        case "ぁ": case "ァ": return new Char(char, ["xa", "la"]);
        case "ぃ": case "ィ": return new Char(char, ["xi", "li", "xyi", "lyi"]);
        case "ぅ": case "ゥ": return new Char(char, ["xu", "lu"]);
        case "ぇ": case "ェ": return new Char(char, ["xe", "le", "xye", "lye"]);
        case "ぉ": case "ォ": return new Char(char, ["xo", "lo"]);

        // か行: 
        case "か": case "カ": return new Char(char, ["ka", "ca"]);
        case "き": case "キ": return new Char(char, ["ki"]);
        case "く": case "ク": return new Char(char, ["ku", "cu", "qu"]);
        case "け": case "ケ": return new Char(char, ["ke"]);
        case "こ": case "コ": return new Char(char, ["ko", "co"]);

        case "きゃ": case "キャ": return new Char(char, ["kya"]);
        case "きぃ": case "キィ": return new Char(char, ["kyi"]);
        case "きゅ": case "キュ": return new Char(char, ["kyu"]);
        case "きぇ": case "キェ": return new Char(char, ["kye"]);
        case "きょ": case "キョ": return new Char(char, ["kyo"]);

        case "くゃ": case "クャ": return new Char(char, ["qya"]);
        case "くゅ": case "クュ": return new Char(char, ["qyu"]);
        case "くょ": case "クョ": return new Char(char, ["qyo"]);

        case "くぁ": case "クァ": return new Char(char, ["qa", "qwa", "kwa"]);
        case "くぃ": case "クィ": return new Char(char, ["qi", "qwi", "qyi"]);
        case "くぅ": case "クゥ": return new Char(char, ["qwu"]);
        case "くぇ": case "クェ": return new Char(char, ["qe", "qwe", "qye"]);
        case "くぉ": case "クォ": return new Char(char, ["qo", "qwo"]);

        case "が": case "ガ": return new Char(char, ["ga"]);
        case "ぎ": case "ギ": return new Char(char, ["gi"]);
        case "ぐ": case "グ": return new Char(char, ["gu"]);
        case "げ": case "ゲ": return new Char(char, ["ge"]);
        case "ご": case "ゴ": return new Char(char, ["go"]);

        case "ぎゃ": case "ギャ": return new Char(char, ["gya"]);
        case "ぎぃ": case "ギィ": return new Char(char, ["gyi"]);
        case "ぎゅ": case "ギュ": return new Char(char, ["gyu"]);
        case "ぎぇ": case "ギェ": return new Char(char, ["gye"]);
        case "ぎょ": case "ギョ": return new Char(char, ["gyo"]);

        case "ぐぁ": case "グァ": return new Char(char, ["gwa"]);
        case "ぐぃ": case "グィ": return new Char(char, ["gwi"]);
        case "ぐぅ": case "グゥ": return new Char(char, ["gwu"]);
        case "ぐぇ": case "グェ": return new Char(char, ["gwe"]);
        case "ぐぉ": case "グォ": return new Char(char, ["gwo"]);

        case "ヵ": case "ヵ": return new Char(char, ["xka", "lka"]);
        case "ヶ": case "ヶ": return new Char(char, ["xke", "lke"]);

        // さ行: 
        case "さ": case "サ": return new Char(char, ["sa"]);
        case "し": case "シ": return new Char(char, ["si", "ci", "shi"]);
        case "す": case "ス": return new Char(char, ["su"]);
        case "せ": case "セ": return new Char(char, ["se", "ce"]);
        case "そ": case "ソ": return new Char(char, ["so"]);

        case "しゃ": case "シャ": return new Char(char, ["sya", "sha"]);
        case "しぃ": case "シィ": return new Char(char, ["syi"]);
        case "しゅ": case "シュ": return new Char(char, ["syu", "shu"]);
        case "しぇ": case "シェ": return new Char(char, ["sye", "she"]);
        case "しょ": case "ショ": return new Char(char, ["syo", "sho"]);

        case "すぁ": case "スァ": return new Char(char, ["swa"]);
        case "すぃ": case "スィ": return new Char(char, ["swi"]);
        case "すぅ": case "スゥ": return new Char(char, ["swu"]);
        case "すぇ": case "スェ": return new Char(char, ["swe"]);
        case "すぉ": case "スォ": return new Char(char, ["swo"]);

        case "ざ": case "ザ": return new Char(char, ["za"]);
        case "じ": case "ジ": return new Char(char, ["zi", "ji"]);
        case "ず": case "ズ": return new Char(char, ["zu"]);
        case "ぜ": case "ゼ": return new Char(char, ["ze"]);
        case "ぞ": case "ゾ": return new Char(char, ["zo"]);

        case "じゃ": case "ジャ": return new Char(char, ["zya", "ja", "jya"]);
        case "じぃ": case "ジィ": return new Char(char, ["zyi", "jyi"]);
        case "じゅ": case "ジュ": return new Char(char, ["zyu", "ju", "jyu"]);
        case "じぇ": case "ジェ": return new Char(char, ["zye", "je", "jye"]);
        case "じょ": case "ジョ": return new Char(char, ["zyo", "jo", "jyo"]);

        // た行: 
        case "た": case "タ": return new Char(char, ["ta"]);
        case "ち": case "チ": return new Char(char, ["ti", "chi"]);
        case "つ": case "ツ": return new Char(char, ["tu", "tsu"]);
        case "て": case "テ": return new Char(char, ["te"]);
        case "と": case "ト": return new Char(char, ["to"]);

        case "ちゃ": case "チャ": return new Char(char, ["tya", "cha", "cya"]);
        case "ちぃ": case "チィ": return new Char(char, ["tyi", "cyi"]);
        case "ちゅ": case "チュ": return new Char(char, ["tyu", "chu", "cyu"]);
        case "ちぇ": case "チェ": return new Char(char, ["tye", "che", "cye"]);
        case "ちょ": case "チョ": return new Char(char, ["tyo", "cho", "cyo"]);

        case "つぁ": case "ツァ": return new Char(char, ["tsa"]);
        case "つぃ": case "ツィ": return new Char(char, ["tsi"]);
        case "つぇ": case "ツェ": return new Char(char, ["tse"]);
        case "つぉ": case "ツォ": return new Char(char, ["tso"]);

        case "てゃ": case "テャ": return new Char(char, ["tha"]);
        case "てぃ": case "ティ": return new Char(char, ["thi"]);
        case "てゅ": case "テュ": return new Char(char, ["thu"]);
        case "てぇ": case "テェ": return new Char(char, ["the"]);
        case "てょ": case "テョ": return new Char(char, ["tho"]);

        case "とぁ": case "トァ": return new Char(char, ["twa"]);
        case "とぃ": case "トィ": return new Char(char, ["twi"]);
        case "とぅ": case "トゥ": return new Char(char, ["twu"]);
        case "とぇ": case "トェ": return new Char(char, ["twe"]);
        case "とぉ": case "トォ": return new Char(char, ["two"]);

        case "だ": case "ダ": return new Char(char, ["da"]);
        case "ぢ": case "ヂ": return new Char(char, ["di"]);
        case "づ": case "ヅ": return new Char(char, ["du"]);
        case "で": case "デ": return new Char(char, ["de"]);
        case "ど": case "ド": return new Char(char, ["do"]);

        case "ぢゃ": case "ヂャ": return new Char(char, ["dya"]);
        case "ぢぃ": case "ヂィ": return new Char(char, ["dyi"]);
        case "ぢゅ": case "ヂュ": return new Char(char, ["dyu"]);
        case "ぢぇ": case "ヂェ": return new Char(char, ["dye"]);
        case "ぢょ": case "ヂョ": return new Char(char, ["dyo"]);

        case "でゃ": case "デャ": return new Char(char, ["dha"]);
        case "でぃ": case "ディ": return new Char(char, ["dhi"]);
        case "でゅ": case "デュ": return new Char(char, ["dhu"]);
        case "でぇ": case "デェ": return new Char(char, ["dhe"]);
        case "でょ": case "デョ": return new Char(char, ["dho"]);

        case "どぁ": case "ドァ": return new Char(char, ["dwa"]);
        case "どぃ": case "ドィ": return new Char(char, ["dwi"]);
        case "どぅ": case "ドゥ": return new Char(char, ["dwu"]);
        case "どぇ": case "ドェ": return new Char(char, ["dwe"]);
        case "どぉ": case "ドォ": return new Char(char, ["dwo"]);

        case "っ": case "ッ": return new っ();

        // な行: 
        case "な": case "ナ": return new Char(char, ["na"]);
        case "に": case "ニ": return new Char(char, ["ni"]);
        case "ぬ": case "ヌ": return new Char(char, ["nu"]);
        case "ね": case "ネ": return new Char(char, ["ne"]);
        case "の": case "ノ": return new Char(char, ["no"]);

        case "にゃ": case "ニャ": return new Char(char, ["nya"]);
        case "にぃ": case "ニィ": return new Char(char, ["nyi"]);
        case "にゅ": case "ニュ": return new Char(char, ["nyu"]);
        case "にぇ": case "ニェ": return new Char(char, ["nye"]);
        case "にょ": case "ニョ": return new Char(char, ["nyo"]);

        // は行: 
        case "は": case "ハ": return new Char(char, ["ha"]);
        case "ひ": case "ヒ": return new Char(char, ["hi"]);
        case "ふ": case "フ": return new Char(char, ["hu", "fu"]);
        case "へ": case "ヘ": return new Char(char, ["he"]);
        case "ほ": case "ホ": return new Char(char, ["ho"]);

        case "ひゃ": case "ヒャ": return new Char(char, ["hya"]);
        case "ひぃ": case "ヒィ": return new Char(char, ["hyi"]);
        case "ひゅ": case "ヒュ": return new Char(char, ["hyu"]);
        case "ひぇ": case "ヒェ": return new Char(char, ["hye"]);
        case "ひょ": case "ヒョ": return new Char(char, ["hyo"]);

        case "ふぁ": case "ファ": return new Char(char, ["fa", "fwa"]);
        case "ふぃ": case "フィ": return new Char(char, ["fi", "fwi", "fyi"]);
        case "ふぅ": case "フゥ": return new Char(char, ["fwu"]);
        case "ふぇ": case "フェ": return new Char(char, ["fe", "fwe", "fye"]);
        case "ふぉ": case "フォ": return new Char(char, ["fo", "fwo"]);

        case "ふゃ": case "フャ": return new Char(char, ["fya"]);
        case "ふゅ": case "フュ": return new Char(char, ["fyu"]);
        case "ふょ": case "フョ": return new Char(char, ["fyo"]);

        case "ば": case "バ": return new Char(char, ["ba"]);
        case "び": case "ビ": return new Char(char, ["bi"]);
        case "ぶ": case "ブ": return new Char(char, ["bu"]);
        case "べ": case "ベ": return new Char(char, ["be"]);
        case "ぼ": case "ボ": return new Char(char, ["bo"]);

        case "びゃ": case "ビャ": return new Char(char, ["bya"]);
        case "びぃ": case "ビィ": return new Char(char, ["byi"]);
        case "びゅ": case "ビュ": return new Char(char, ["byu"]);
        case "びぇ": case "ビェ": return new Char(char, ["bye"]);
        case "びょ": case "ビョ": return new Char(char, ["byo"]);

        case "ヴぁ": case "ヴァ": return new Char(char, ["va"]);
        case "ヴぃ": case "ヴィ": return new Char(char, ["vi", "vyi"]);
        case "ヴ": case "ヴ": return new Char(char, ["vu"]);
        case "ヴぇ": case "ヴェ": return new Char(char, ["ve", "vye"]);
        case "ヴぉ": case "ヴォ": return new Char(char, ["vo"]);

        case "ヴゃ": case "ヴャ": return new Char(char, ["vya"]);
        case "ヴゅ": case "ヴュ": return new Char(char, ["vyu"]);
        case "ヴょ": case "ヴョ": return new Char(char, ["vyo"]);

        case "ぱ": case "パ": return new Char(char, ["pa"]);
        case "ぴ": case "ピ": return new Char(char, ["pi"]);
        case "ぷ": case "プ": return new Char(char, ["pu"]);
        case "ぺ": case "ペ": return new Char(char, ["pe"]);
        case "ぽ": case "ポ": return new Char(char, ["po"]);

        case "ぴゃ": case "ピャ": return new Char(char, ["pya"]);
        case "ぴぃ": case "ピィ": return new Char(char, ["pyi"]);
        case "ぴゅ": case "ピュ": return new Char(char, ["pyu"]);
        case "ぴぇ": case "ピェ": return new Char(char, ["pye"]);
        case "ぴょ": case "ピョ": return new Char(char, ["pyo"]);

        // ま行: 
        case "ま": case "マ": return new Char(char, ["ma"]);
        case "み": case "ミ": return new Char(char, ["mi"]);
        case "む": case "ム": return new Char(char, ["mu"]);
        case "め": case "メ": return new Char(char, ["me"]);
        case "も": case "モ": return new Char(char, ["mo"]);

        case "みゃ": case "ミャ": return new Char(char, ["mya"]);
        case "みぃ": case "ミィ": return new Char(char, ["myi"]);
        case "みゅ": case "ミュ": return new Char(char, ["myu"]);
        case "みぇ": case "ミェ": return new Char(char, ["mye"]);
        case "みょ": case "ミョ": return new Char(char, ["myo"]);

        // や行: 
        case "や": case "ヤ": return new Char(char, ["ya"]);
        case "ゆ": case "ユ": return new Char(char, ["yu"]);
        case "よ": case "ヨ": return new Char(char, ["yo"]);

        case "ゃ": case "ャ": return new Char(char, ["xya", "lya"]);
        case "ゅ": case "ュ": return new Char(char, ["xyu", "lyu"]);
        case "ょ": case "ョ": return new Char(char, ["xyo", "lyo"]);

        // ら行: 
        case "ら": case "ラ": return new Char(char, ["ra"]);
        case "り": case "リ": return new Char(char, ["ri"]);
        case "る": case "ル": return new Char(char, ["ru"]);
        case "れ": case "レ": return new Char(char, ["re"]);
        case "ろ": case "ロ": return new Char(char, ["ro"]);

        case "りゃ": case "リャ": return new Char(char, ["rya"]);
        case "りぃ": case "リィ": return new Char(char, ["ryi"]);
        case "りゅ": case "リュ": return new Char(char, ["ryu"]);
        case "りぇ": case "リェ": return new Char(char, ["rye"]);
        case "りょ": case "リョ": return new Char(char, ["ryo"]);

        // わ行: 
        case "わ": case "ワ": return new Char(char, ["wa"]);
        case "を": case "ヲ": return new Char(char, ["wo"]);
        case "ん": case "ン": return new ん();

        case "ゎ": case "ヮ": return new Char(char, ["xwa", "lwa"]);

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

        case "0": case "０": return new Char(char, ["0"]);
        case "1": case "１": return new Char(char, ["1"]);
        case "2": case "２": return new Char(char, ["2"]);
        case "3": case "３": return new Char(char, ["3"]);
        case "4": case "４": return new Char(char, ["4"]);
        case "5": case "５": return new Char(char, ["5"]);
        case "6": case "６": return new Char(char, ["6"]);
        case "7": case "７": return new Char(char, ["7"]);
        case "8": case "８": return new Char(char, ["8"]);
        case "9": case "９": return new Char(char, ["9"]);

        // 記号
        case "ー": return new Char(char, ["-"]);
        case "!": case "！": return new Char(char, ["!"]);
        case "?": case "？": return new Char(char, ["?"]);
        case "'": return new Char(char, ["'"]);
        case "\"": return new Char(char, ["\""]);
        case "、": return new Char(char, [","]);
        case "。": return new Char(char, ["."]);
        default: return null;
    }
};
