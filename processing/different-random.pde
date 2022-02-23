  /*
    Generate random, different integers between 1 and poolSize
    count, poolSize: positive integers, poolSize should not be smaller than count
  */

int[] selectRandomly(int count, int poolSize) {
  int[] result = {};
  while(count > 0) {
    count = count - 1;
    append(result, int(random(poolSize)));
  }
  return result;
}

void textArray(int[] array, int x, int y) {
  String arrayString = join(nf(array, 0), ", "); 
  text(arrayString, x, y);
}

void setup() {
  size(600, 600);
  background(100);
  int[] arrayForTop = selectRandomly(5, 7);
  textArray(arrayForTop, 10, 20); // expected: 5 random, different integers between 1 and 7
  int[] arrayForBottom = selectRandomly(3, 4);
  textArray(arrayForBottom, 10, height-20);  // expected: 3 random, different integers between 1 and 4
}
