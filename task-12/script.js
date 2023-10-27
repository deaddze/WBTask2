class Book{//создаем класс
  constructor(name, author, yearOfPublic){//делаем контруктор для данных о книге
    this.name = name,
    this.author = author,
    this.yearOfPublic = yearOfPublic
  }
  getName(){//получаем имя через this
    return this.name
  }
  setName(newName){//устанавливаем новое имя через this и передаем значение функции
    this.name = newName;
  }
  getAuthor(){
    return this.author
  }
  setAuthor(newAuthor){
    this.author = newAuthor
  }
  getYearOfPublic(){
    return this.getYearOfPublic
  }
  setYearOfPublic(year){
    this.yearOfPublic = year
  }
}
const book = new Book('Flower', 'Mikail Tereshkov', 2002);
book.getName();
book.getAuthor();
book.getYearOfPublic();
book.setYearOfPublic(2004);
book.setAuthor('Vadim Korin');
book.setName('Divine');
