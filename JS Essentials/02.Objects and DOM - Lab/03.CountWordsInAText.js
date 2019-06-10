function countWordsInText(input) {

    let inputArray = input.toString().split(/[\W+]/).filter(n => n !== "");
    let wordsCounters = {};

    inputArray.forEach(word => {

        if (!wordsCounters[word]) {
            wordsCounters[word] = 0;
        }
        wordsCounters[word]++;
    });
    console.log(JSON.stringify(wordsCounters));
}

countWordsInText("Far too slow, you're far too slow.")