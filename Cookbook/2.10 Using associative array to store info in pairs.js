document.getElementById("btn").addEventListener('click', function(e) {
  e.preventDefault();
  var fm = document.getElementById("fm");
  var arr = [];
  for (var i = 0; i < fm.elements.length; i++) {
    if (fm.elements[i].type == "text") {
      arr[fm.elements[i].id] = fm.elements[i].value;
    }
  }

  var str = "";
  for (var prop in arr) {
    str += prop + ": " + arr[prop] + '<br />';
  }
  document.getElementById('rs').innerHTML = "Answer is:"+"<br/>"+str;
});
