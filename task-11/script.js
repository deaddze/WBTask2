function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
const add2 = makeAdder(2);
add2(3);
