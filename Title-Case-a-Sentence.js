//Title Case a Sentence
function titleCase(str) {
  str = str.toLowerCase();
  var myArr = str.split(" ");
  for(var i=0; i<myArr.length;i++){
    myArr[i] = myArr[i].charAt(0).toUpperCase()+myArr[i].slice(1);
  }
  console.log(myArr);
  var str1 = myArr.join(" ");
  return str1;
}

titleCase("I'm a little tea pot");
