
const charArray = [
    new に(),
    new ん(),
    new じ(),
    new ん()
];

charArray[0].nextChar = charArray[1];
charArray[1].nextChar = charArray[2];
charArray[2].nextChar = charArray[3];

let currentIndex = 0;

$(window).keydown(function(e) {
    if (currentIndex >= charArray.length) return;

    const result = charArray[currentIndex].checkRoman(e.key);
    if (result === ROMAN_NG) {
        console.log("違うよん", e.key);
    }
    else if (result === ROMAN_KEEP) {
        console.log("KEEP", e.key);
    }
    else if (result === ROMAN_OK) {
        console.log("OK", e.key);
        currentIndex += 1;
    }
});



