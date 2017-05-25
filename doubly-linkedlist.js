//constructor of a NODE,node建立的三要素：后一个next, 前一个prev, 自己的值element
function Node(element) {
  this.next = null;
  this.prev = null;
  this.element = element;
}
//constructor of doubly linked list. 双链表三要素：头，尾，长度
function DbLinklist() {
  this.length = 0;
  this.head = null;
  this.tail = null;
}
//methods:加入一个元素
DbLinklist.prototype.add = function(element) {
  //情况一, 列表为空
  var myNode = new Node(element);
  //var current = this.tail;
  if (this.length == 0) {
    this.head = myNode;
    this.tail = myNode;
  } else {
    //情况2: 列表不为空，即加到队尾
    this.tail.next = myNode;
    this.tail = myNode;
    myNode.prev = this.tail;
  }
  this.length++;
};
//插入队列，分为在第一个位置插入，在中间插入，在尾部最后一个地方插入
DbLinklist.prototype.insert = function(element, position) {
  var myNode = new Node(element);
  var current = this.head;
  var previous;
  var index = 0;
  //验证插入位置是否有效
  if (position < 0 || position > this.length) {
    return false;
  } else {
    //情况一，在队首插入
    if (position == 0) {
      myNode.next = current;
      this.head = myNode;
      current.prev = myNode;
    } else if (position == this.length) {
      //情况二，在队尾插入
      current = this.tail;
      current.next = myNode;
      myNode.prev = current;
      this.tail = myNode;
    } else {
      //情况三，在队中插入,当位置没找到之前，只进行移位
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      //找到位置后
      myNode.next = current;
      previous.next = myNode;
      current.prev = myNode;
      myNode.prev = previous;
    }
  }
  this.length++;
  return current.element;
};
//删除元素，也分三个情况，从头删，从尾删，从中间删
DbLinklist.prototype.delete = function(position) {
  //确定position是有效的
  var current = this.head;
  var previous;
	var index = 0;
  if (position < 0 || position > this.length) {
    return null;
  } else {
    if (position == 0) {
      //情况一，从头删
      this.head = current.next;
      if (this.length == 1) {
        //当list长度==1的时候
        this.tail = null;
      } else {
        //当list长度>1的时候
        this.head.prev = null;
      }
    } else if(position === this.length-1) {
      //从尾部删，这时候不存在previous，因为没有loop这个链表，previous不知道是谁
      current = this.tail; //给current赋个值，让他等于tail，这时tail的位置还没有变，current和tail指的是同一个东西
      this.tail =  this.tail.prev; //移动tail，让她指向倒数第二个element；current现在还是指向倒数第一个element
      this.tail.next = null; //把tail的下一位变为null
    } else {
      //从中间删
			while(index<position){//先移位
				previous = current;//这时previous才被赋值
				current = current.next;
				index++;
			}
			previous.next = current.next;
			current.next.prev = previous;
    }
  }
	this.length--;
	return current.element;
};

var tryMe = new DbLinklist();
tryMe.add(5);
tryMe.add(7);
tryMe.add(9);
//tryMe.insert(11, 2);
tryMe.delete(2);
console.log(tryMe);
