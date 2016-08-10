function Node(data) {
  this.data = data;
  this.next = null;
}    

var myNode = new Node(1);
myNode.next = new Node(2);
myNode.next.next = new Node(3);
myNode.next.next.next = new Node(4);
myNode.next.next.next.next = new Node(5);

function ntolast(head, k){

  var fastPointer = head;
  var slowPointer = head;
  
  for(var i=0; i<k; i++){
    if(fastPointer==null){
      return null;
    }
    fastPointer = fastPointer.next;
  }
  while(fastPointer.next!==null){
      fastPointer = fastPointer.next;
      slowPointer = slowPointer.next;
  }
  return slowPointer;
}
  


//ntolast(3, n5);
//console.log(myNode.next);
console.log(ntolast(myNode, 3));
