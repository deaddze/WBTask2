function makeAdder(x) {
  return function(y) {
    return x + y;//используем замыкание
  };
}
const add2 = makeAdder(2);//вызываем функцию и передаем его значение в константу
add2(3);//в значении была функция, вызываем ее и получаем сумму
