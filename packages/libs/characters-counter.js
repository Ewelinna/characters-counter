// Method 1

const countCharacters = str => {
  var chars = {};
  str.split("").forEach(function(singleChar) {
    chars[singleChar] = isNaN(chars[singleChar]) ? 1 : chars[singleChar] + 1;
  });
  return chars;
}

// Method 2

const countCharactersWithSplit = str => {
  let charsWithOccurences = {};
  let chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    let numberOfOccurences = str.split(chars[i]).length - 1;
    let charKey = chars[i];
    charsWithOccurences[charKey] = numberOfOccurences;
  }
  return charsWithOccurences;
};

// Method 3

const countCharactersWithReduce = str =>
  str.split("").reduce((accumulator, char) => {
    accumulator[char] = isNaN(accumulator[char])
      ? 1
      : ++accumulator[char];
    return accumulator;
  }, {});

module.exports = {
  countCharacters,
  countCharactersWithSplit,
  countCharactersWithReduce
};
