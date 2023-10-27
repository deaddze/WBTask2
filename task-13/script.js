class Shape{//создаем класс
  constructor(a, b) {//создаем конструктор
    this.a = a;
    this.b = b;
  }

  get area() {//узнаем площадь 
    return this.a * this.b;
  }

  get perimeter() {//узнаем периметр
    return 2 * (this.a + this.b);
  }
}

class Rectangle extends Shape {//используем наследование
  constructor(a, b) {
    super(a, b);//берем из родителя ключи конструктора и передаем в них значения
  }
}

class Circle extends Shape{
  constructor(radius) {
    super()
    this.radius = radius;
  }
  
  get area() {
    return Math.PI * this.radius * this.radius;
  }
  
  get perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Triangle extends Shape{
  constructor(a, b, h) {
    super(a, b)
    this.h = h
  }

  get perimeter() {
    return this.b + this.a + this.c
  }

  get area() {
    return (this.a * this.h) / 2
  }
}
const p = new Triangle(10, 20, 3);
