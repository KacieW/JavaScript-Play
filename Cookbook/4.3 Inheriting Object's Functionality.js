function Book(title, author){
	this.getTitle = function(){
		return "Title is "+title;
	}
	this.getAuthor = function(){
		return "Author is "+Author;
	}
}

function TechBook(title, author, category){
	this.getCategory = function(){
		return "TechBook category is "+category;
	}
	/*this.getBook= function(){
		return title+ " "+author+" "+category;
	}*/
	Book.apply(this, arguments);//call super constructor to chain the constructors for both.
}

//subclass extends superclass
TechBook.prototype = Object.create(Book.prototype);
TechBook.prototype.constructor = Book;

var tech = new TechBook("A", "AA", "AAA");
console.log(tech.getTitle());
