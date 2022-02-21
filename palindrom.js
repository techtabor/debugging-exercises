function isPalindrom(sentence) {
  const normalizedForward = sentence.toLowerCase().replace(/ /, '');
  const normalizedBackward = normalizedForward.split('').reverse().join('');
  return normalizedForward === normalizedBackward;
}

console.log(isPalindrom('Indul a görög aludni'));
console.log(isPalindrom('Géza kék az ég'));