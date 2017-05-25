//create a linklist: 必须有一个head为null, 还必须有一个长度length.
function LinkedList() {
  this.head = null;
  this.length = 0;
}
//helper class "NODE": node必须有一个element属性，还要有一个next=null的属性
function Node(element) {
  this.element = element;
  this.next = null;
}
//加入一个element
LinkedList.prototype.add = function(element) {
    var myNode = new Node(element); //新建一个node，把element传进去
    var current; //current指针
    //情况一：list is empty，把要加的head指向(->)node就可.即head等于node
    if (this.head === null) {
      this.head = myNode;
    } else {
      //情况二：list不为空，找到list最后一个元素，把要加的元素放到它后面就可以。
      /*先让current指向head，当current被赋值后，就可以loop current.next， 如果current.next不为null， 就将current指针移位，即current=current.next*/
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      /*当current.next为null时，说明已经找到列表的最后一个element，把node放到最后就可以，即current.next(等号左边)指向node（在等号右边）*/
      current.next = myNode;
    }
    this.length++;
  }
  //删除一个element
LinkedList.prototype.remove = function(position) {
    var myNode = new Node(position); //根据要删除的位置，新建一个要被删除的node
    //先检查一下要删除的位置是否有效
    if (position < 0 || position >= this.length) {
      return null;
    } else {
      var current = this.head; //把head的值给current
      var previous;
      var index = 0;
      //情况一：remove first element，即position为0，只要把head指向第二个元素（current.next）就可以
      if (position === 0) {
        this.head = current.next;
      } else {
        //情况二：删list里面或最后一个element
        while (index < position) { //当index小于要删除的位置时，我们就移位即可
          previous = current; //把previous指向current
          current = current.next; //current变成current.next
          index++;
        }
        //找到要删除的位置时，跳过当前的元素，把前一个和后一个连起来就可以
        previous.next = current.next;
      }
    }
    this.length--;
    return current;
  }
  //插入一个元素
LinkedList.prototype.insert = function(insertPosition, insertElem) {
    //新建一个要插入的元素
    var myNode = new Node(insertElem);
    var current = this.head; //把head的值附给current
    var previous;
    var index = 0;
    //检查position是否有效
    if (insertPosition < 0 || insertPosition > this.length) {
      return false;
    } else {
      /*情况一：insert element between head and first element， ￥￥￥先把node.next跟后面的element连起来，再把head跟node连起来￥￥￥￥ ！！顺序很重要！！*/
      if (insertPosition == 0) {
        myNode.next = current;
        this.head = myNode;
      } else {
        //情况二：在队中或队尾插入，在没找到位置之前，只进行移位
        while (index < insertPosition) {
          previous = current;
          current = current.next;
          index++;
        }
        //找到位置后，顺序很重要，先把node.next的下家找好，这样才有备无患，然后把previous.next指向node
        myNode.next = current;
        previous.next = myNode;
      }
      this.length++;
      return true;
    }
  }
  //查找元素是否存在
LinkedList.prototype.find = function(element) {
  var index = 0;
  var current = this.head;
  while (current) { //当current不为null时，即没到队尾时
    if (current.element == element) { //当前element如果等于被找的element
      return index; //返回当前这个element的index
    }
    index++;
    current = current.next; //移位继续找
  }
  return -1; //如果没找到，或者list为null，就返回-1
}

function reverseMe(linkedlist) {
  var nodeArr = []; //用数组来储存linkedlist里的内容
  var current = linkedlist.head;
  //当linkedlist还有element的时候
  while (current) {
    nodeArr.push(current); //把每个element拿出来，放到array里面
    current = current.next; //进行移位工作
  }
  //把所有的element都放到array后，新建一个空的linkedlist，用来放置rever的element
  var reversedList = new LinkedList();
  //把数组里最后一个element先赋值给head，不然没有办法loop，这时head：9->null
  reversedList.head = nodeArr.pop();
  var currentReversed = reversedList.head;
  reversedList.length = 1; //新linkedlist长度加1

  var popNode = nodeArr.pop(); //在接着把这时数组最后一个pop出来，用来做while循环：7->9->null
  while (popNode) {
    popNode.next = null; //先把node的next变成null，不然不好用，而且他还会保留原来的下一个element的指向
    currentReversed.next = popNode; //把current.next指向node
    currentReversed = currentReversed.next; //移位
    popNode = nodeArr.pop(); //在pop出一个新的element接着做while循环
    reversedList.length++;
  }
  return reversedList; //返回reverse后的链表
}
//找到倒数第k个的element
function findKthFromEnd(linklist, k) {
  var current = linklist.head;
  var index = 0;
  var leng = linklist.length - k;
  if (k <= 0 || k > linklist.length) {
    return false;
  }
  while (current) {//当current不为null
    if (index < leng) {//没找到，就继续移位
      current = current.next;
    }
    if (index == leng) {//找到了，就直接返回current node即可
      return current;
    }
    index++;
  }
};
//删除倒数第k个element
function deleteKthFromEnd(linklist, k) {
  var leng = linklist.length;
  if (k <= 0 || k > leng) {
    return false;
  } else {
    var position = leng - k;//算数正数第几个的值
    var temp = linklist.remove(position);//删掉该正数位置上的element就可以
    return linklist;
  }
}
var tryMe = new LinkedList();
tryMe.add(4);
tryMe.add(1);
tryMe.add(7);
tryMe.add(9);
console.log(tryMe);
//tryMe.remove(1);
//var me = tryMe.find(6);
//var me  = reverseMe(tryMe);
//var me = findKthFromEnd(tryMe,8);
var me = deleteKthFromEnd(tryMe, 4);
console.log(me);
