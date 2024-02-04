function solve(text, word) {
    let censored = text.replace(word, repeat(word));

    while (censored.includes(word)) {
        censored = censored.replace(word, repeat(word));
    }

    console.log(censored);
    
    function repeat(word) {
        return '*'.repeat(word.length);
    }
}

// Example usage:
solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');
