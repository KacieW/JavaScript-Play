function Node(element){
	this.element = element;
	this.next = null;
}

function SingleList (){
	this.head = null;
	this.length = 0;
}

SingleList.prototype.add = function(value){
  var myNode = new Node(value);
  var currentNode;
  
  if(this.head === null){
    //point head to the new added node, which is myNode
    this.head = myNode;
  }else{
    //find the last element in the list, start from the begining of the list, which is the "head", then use while to find the currentNode.next == null.
    currentNode = this.head;
    while(currentNode.next){
      //updated the pointer "currentNode" with the new find element, which its next is not null, in the list.
      currentNode = currentNode.next;
    }
    //find the last element in the list, then point the last element to the new added element, which is myNode.
    currentNode.next =myNode;
  }
  this.length++;
  return myNode;
};


SingleList.prototype.findNode = function(position){
  var currentNode =this.head;
  var counter =0;
  if(position<0 ||position>this.length||this.length==0){
    return false;
  }
  while(counter<position ){
    currentNode = currentNode.next
    counter++;
  }
  return currentNode;
};

SingleList.prototype.remove = function(position){
  var previous;
  var currentNode = this.head;
  var counter=0;
  if(position>this.length || position<0){
    return null;
  }
  if(position==0){
    currentNode = currentNode.next;
  }else{
    //console.log("not 1");
    while(counter<position){
      previous = currentNode;
      currentNode = currentNode.next;
      counter++;
    }
    previous.next = currentNode.next;
  }
  this.length--;
  return currentNode;
};

SingleList.prototype.insert = function(position, element){
  if(position<=this.length||position>=0){
    //console.log(element);
    var currentNode = this.head;
    var myNode = new Node(element);
    var previous;
    var counter = 0;
    //insert as the first element
    if(position===0){
      //console.log(position);
      this.head = myNode;
      myNode.next = currentNode;
    }
    //insert at anywhere in the list
   else{
       while(counter<position){
         previous = currentNode;
         currentNode = currentNode.next;
         counter++;
       }
      previous.next = myNode;
      myNode.next = currentNode;
    }
   
    this.length++;
    return true;
  }else{
    return false;
  }
  
};

var myTest = new SingleList();
myTest.add(5);
myTest.add(6);
myTest.add(7);

//myTest.findNode(6);
//console.log(myTest.findNode(0));

//console.log(myTest.insert(3,8));
//console.log(myTest.findNode(3));
//console.log(myTest.remove(1));
