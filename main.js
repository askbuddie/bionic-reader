function addTag() {
    const tagName = document.getElementById("tagInput").value;
    console.log(tagName)
    document.getElementById("tagInput").value = ""
}

// making half of the letters in a word bold
function highlightText(sentenceText) {
    return sentenceText
        .replace(/\p{L}+/gu, (word) => {
            const { length } = word;
            let midPoint = 1;
            if (length > 3) midPoint = Math.round(length / 2);
            const firstHalf = word.slice(0, midPoint);
            const secondHalf = word.slice(midPoint);
            const htmlWord = '<strong>' + firstHalf + '</strong>' + secondHalf;
            return htmlWord;
        });
}

function convertIt() {
    const tags = ['p', 'span', 'li']
    const ignoreChars = ['&'];
    function convertToBionic(stri) {
        let upperStr = stri.split(".");
        upperStr = upperStr.map(str => highlightText(str));
        return upperStr.join(".")
    }
    for (let tag of tags) {
        const tagS = document.getElementsByTagName(tag);
        for (let index = 0; index < tagS.length; index++) {
            tagS[index].innerHTML = convertToBionic(tagS[index].innerText)
        };
    }
}


convertIt();

//handle infinite srolling on sites like twitter
window.addEventListener('scroll', convertIt);
