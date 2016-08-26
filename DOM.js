var books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false
  },
  {title: 'The Most Human Human',
   author: 'Brian Christian',
   alreadyRead: true
  }];
//console.log(books[0].title);
//var bookList = document.getElementById('bookList');
var bookUl = document.createElement('ul');
var a =document.body.appendChild(bookUl);
//console.log(a);

for(var i=0; i<books.length; i++){
  var nodeList = document.createElement('li');
  var nodeP = document.createElement('p');
  var textNode = document.createTextNode(books[i].title);
  nodeP.appendChild(textNode);
  nodeList.appendChild(nodeP);
  bookUl.appendChild(nodeList);
}
document.getElementById('bookList').addEventListener('click', colorMe);
function colorMe(){
  this.style.color='red';  
  var t = document.getElementsByTagName('li')[1];
  t.classList.toggle('hide');
}
