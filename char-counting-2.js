function countLetters(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((result, item) => {
        result[item] = {count: 0, occurences: []};
        return result;
    }, {});

    str = str.toLowerCase();

    for (var i = 0; i < str.length; i++) {
        if (str[i] in alphabet) {
            alphabet[str[i]].count++;
            alphabet[str[i]].occurences.push(i)
        }
    }

    for (key in alphabet) {
        if (alphabet[key].count === 0) delete alphabet[key];
    }

    return alphabet;
}

console.log(countLetters('lighthouse in the house'));
