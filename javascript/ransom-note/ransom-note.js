console.clear();

function harmlessRansomNote(noteText, magazineText) {
  let isNotePossible = true;
  let noteArray = noteText.split(' ');
  let magazineArray = magazineText.split(' ');
  let magazineObj = {};

  magazineArray.map(word => {
    magazineObj[word] = magazineObj[word] || 0;
    magazineObj[word]++;
  });

  for (let i = 0; i < noteArray.length; i++) {
    const word = noteArray[i];

    if (magazineObj[word]) {
      magazineObj[word]--;
      isNotePossible = magazineObj[word] >= 0;
    } else {
      isNotePossible = false;
    }

    if (!isNotePossible) break;
  }

  return isNotePossible;
}

const isPossible = harmlessRansomNote(
  'this is a secret note for you from a secret admirer',
  'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
);

console.log(isPossible);
