function runPalindromExample() {  
  function isPalindrom(sentence) {
    const normalizedForward = sentence.toLowerCase().replace(/ /, '');
    const normalizedBackward = normalizedForward.split('').reverse().join('');
    return normalizedForward === normalizedBackward;
  }
  
  console.log('palindrom test result:', isPalindrom('Indul a görög aludni'));
  console.log('palindrom test result:', isPalindrom('Géza kék az ég'));
};