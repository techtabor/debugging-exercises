function runWeatherExample() {
  const code = '(function (day = new Date()) {console.log(`The weather is nice today, on ${day}.)`})()';

  eval(code);
}