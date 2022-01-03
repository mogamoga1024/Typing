
const RomanFactory = {};

RomanFactory.create = function(char) {
    switch (char) {
        case "あ": return new あ();
        case "じ": return new じ();
        case "ぜ": return new ぜ();
        case "た": return new た();
        case "っ": return new っ();
        case "った": return new った();
        case "に": return new に();
        case "にゃ": return new にゃ();
        case "ぴ": return new ぴ();
        case "や": return new や();
        case "ゃ": return new ゃ();
        case "ん": return new ん();
        default:
            throw new Error(char + "に対応するオブジェクトが存在しません。");
    }
};
