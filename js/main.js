
/*
にんじん
んにゃぴ
やったぜ。
やじゅう
*/

let currentText = new Text("うんち！");

$(window).keydown(function(e) {
    console.log(e.key);

    switch (currentText.inputRoman(e.key)) {
        case TEXT_NG:
            console.log("NG");
            break;
        case TEXT_KEEP:
            console.log("KEEP");
            break;
        case TEXT_COMPLETE:
            console.log("OK");
            break;
    }
});



