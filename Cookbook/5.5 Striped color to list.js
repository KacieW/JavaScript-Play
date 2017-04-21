//3 ways to do it
var list = document.querySelectorAll("li:nth-child(2n+1)");
for(var i =0; i<list.length;i++){
  list[i].setAttribute("style", "background-color:#ffeeee");
}

//**************//
var list1 = document.querySelectorAll("li:nth-child(odd)");

//*******for older browser and IE8********//
var parentElement = document.getElementById("theList");
var list2 = parentElement.geElementsByTagName("li");
for(var i =0; i<list2.length; i++){
  if(i%2==0){
    list2[i].setAttribute("style", "background-color:#eeffee");
  }
}
