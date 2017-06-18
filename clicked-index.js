<ul id='test'>
  <li>这是第一条</li>
  <li>这是第二条</li>
  <li>这是第三条</li>
</ul>


var list =document.getElementById('test').children;
console.log(list);
for(var i=0;i<list.length;i++){
	list[i].index = i;
	list[i].addEventListener('click', function (){
		console.log(this.index);
	});
}
