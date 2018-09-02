console.clear();

/**
 * Every word in the string should be reversed, but the string as a whole should not be reversed
 * The words are in the same order.
 *
 * Cannot use the Array.reverse() method.
 */

function reverseWords(phrase) {
  if (typeof phrase !== 'string') return;
  if (phrase.length === 0) return phrase;

  const phraseArray = phrase.trim().split(' ');

  // the wordMem will store the words we've already sorted, so if we
  // encounter them again we'll be able to auto reverse
  const wordMem = {};

  let newWord = null;
  let newPhrase = [];

  //console.log('Breakpoint 0 - [phraseArray]', phraseArray);

  async function _reverseEngine(word) {}

  function _joinPhrase(word) {
    if (typeof word === 'string') newPhrase.push(word);
  }

  // now I need to take the last position and put it in the start position, inverting the array
  for (let i = 0; i < phraseArray.length; i++) {
    if (typeof wordMem[phraseArray[i]] === 'string') {
      console.log('Optional Flag - [wordExists]', phraseArray[i]);
      _joinPhrase(wordMem[phraseArray[i]]);
      continue;
    } else {
      wordMem[phraseArray[i]] = '';
    }

    const wordArray = phraseArray[i].split('');
    let newWord = [];

    //console.log('Breakpoint 1 - [wordArray]', wordArray);

    for (let c = wordArray.length - 1; c >= 0; c--) {
      newWord.push(wordArray[c]);
    }

    newWord = newWord.join('');
    wordMem[phraseArray[i]] = newWord;
    _joinPhrase(newWord);
  }

  //console.log('Breakpoint 2 - [newPhrase]', newPhrase.join(' ').trim());
  return newPhrase.join(' ').trim();
}

console.log(reverseWords(''));
console.log(reverseWords('this is a string of words'));
console.log(reverseWords('I did a thing today so I could be clean.'));
console.log('C');
