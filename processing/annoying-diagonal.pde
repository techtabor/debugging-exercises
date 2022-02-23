ArrayList<Integer> x_coords;
ArrayList<Integer> y_coords;

void setup() {
  size(500, 500);
  x_coords = new ArrayList<Integer>();
  y_coords = new ArrayList<Integer>();
  for (int i = 0; i < 100; i++) {
    x_coords.add(5*i);
    y_coords.add(5*i);
  } 
}

void draw() {
  for (int i = 0; i < x_coords.size(); i++) {
    for (int j = 0; j < y_coords.size(); j++) {
      if (x_coords.get(i) == y_coords.get(j)) {
        rect(x_coords.get(i), y_coords.get(j), 10, 10);
      }  
    }
  }
}
