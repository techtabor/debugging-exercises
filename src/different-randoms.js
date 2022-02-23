function runDifferentRandomExample() {
  let result = [];
  /*
    Generate random, different integers between 1 and poolSize
    count, poolSize: positive integers, poolSize should not be smaller than count
  */
  function selectRandomly(count, poolSize) {
    while(count > 0) {
      count = count - 1;
      result = result.push(randomPositiveInteger(poolSize));
    }
    return result;
  }
  
  function randomPositiveInteger(max) {
    let random = Math.floor(Math.random() * max) + 1;
    while (random in result) {
      random = Math.floor(Math.random() * max) + 1;
    }
    return random;
  }
  
  console.log(selectRandomly(3, 10));  // expected: 3 random, different integers between 1 and 10
  console.log(selectRandomly(2, 6)); // expected: 2 random, different integers between 1 and 6
}
