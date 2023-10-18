const functionsArray = [
  () => {
    return 1;
  },
  () => {
    return 2;
  },
  () => {
    return 3;
  },
];

let index = 0;
function callFunc() {
  const f = functionsArray[index];
  if (f) {
    const result = f();
    index += 1;
    callFunc();
  } else {
    return 'Все функции были выполнены';
  }
};
callFunc();
