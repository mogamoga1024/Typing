
const text = "んにゃぴ";

const charKeyDic = {
    "ん": {
        romanList: [
            ["n", "n"],
        ],
        checkRoman: function() {
            
        }
    },
    "に": {},
    "にゃ": {},
    "ゃ": {},
    "ぴ": {}
};

$(window).keydown(function(e) {
    console.log(e.key, e.shiftKey);
});



