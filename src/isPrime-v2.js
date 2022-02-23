function runPrimeV2Example() {
  /*
    Check if a number is prime. Return true if number is prime, false otherwise.
    number: an integer
  */
  function isPrime(number) {
    if (number === 0 || number === 1) {
      return false;
    }
    const checkList = range(2, number - 1);
    for (const check in checkList) {
      if (number % check === 0) {
        return false;
      }
    }
    return true;
  }
  
  function range(low, high) {
    if (high < low) return [];
    return Array.from(new Array(high - low), (_, i) => i + low);
  }

  range(0, 20).forEach(number => console.log(`isPrime(${number}): ${isPrime(number)}`));
}
