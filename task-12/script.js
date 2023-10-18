class Book{
  constructor(name, author, yearOfPublic){
    this.name = name,
    this.author = author,
    this.yearOfPublic = yearOfPublic
  }
  getName(){
    return this.name
  }
  setName(newName){
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
