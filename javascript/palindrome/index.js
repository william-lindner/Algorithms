console.clear();

function isPalindrome(phrase = '') {
  let characterArray = phrase.toLowerCase().split('');

  characterArray = characterArray.filter(character => {
    return /^[a-zA-Z]$/.test(character);
  }, []);

  return characterArray.join('') === characterArray.reverse().join('');
}

console.log(isPalindrome('javascript'));
