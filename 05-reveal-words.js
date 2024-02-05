function replaceWords(words, template) {
    'use strict';
    const separatedWords = words.split(', ');
    const templateWords = template.split(' ');
    let result = '';

    for (const templateWord of templateWords) {
        if (templateWord[0] === '*') {
            const correspondingWord = separatedWords.find(x => x.length === templateWord.length);
            result += `${correspondingWord} `;
        } else {
            result += `${templateWord} `;
        }
    }
    console.log(result.trim());
}

replaceWords('great',
    'softuni is ***** place for learning new programming languages'
);
replaceWords('great, learning',
'softuni is ***** place for ******** new programming languages'
);