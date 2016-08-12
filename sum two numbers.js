//Find a pair of elements from an array whose sum equals a given number
//implement using binarytree for  O(nlogn) time. logn is search the number in the tree, n is for sorting.


function BinarySearchTree(){
  this.root = null;
}

function Node(key){
  this.key = key;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function(key){
  var root = this.root;
  var myNode = new Node(key);
  
  if(root ==null){
    this.root = myNode;
  }else{
    insertNode(root, myNode);
  }
}

var insertNode = function(node, myNode){
    if(node.key<myNode.key){ //put the key as rightchild
      if(node.right ==null){
        node.right = myNode;
      }else{
        insertNode(node.right, myNode);
      }
    }
    if(node.key >myNode.key){ //put it as leftchild
      if(node.left ==null){
        node.left = myNode;
      }else{
        insertNode(node.left, myNode);
      }
    }
  }

BinarySearchTree.prototype.search = function(key){
  var root = this.root;
  return searchNode(root, key);
}
var searchNode = function(node, key){
  if(node===null){
    return false;
  }
  if(node.key>key){ //move to leftchild
    return searchNode(node.left, key);
  }else if(node.key<key){
    return searchNode(node.right, key);
  }else{
    return true;
  }
}

var target = 7;
var inputArr = [3, 5, 2, -4, 8, 11];
var sortedArr = inputArr.sort(function(a, b){return a-b;});

var tree = new BinarySearchTree();

for(var i=0; i<sortedArr.length; i++){
  var temp = sortedArr[i];
  //console.log(temp);
  tree.insert(temp);
}
console.log(tree.root);

for(var ii=0; ii<sortedArr.length; ii++){
  var tempi = sortedArr[ii];
  var foundPair = tree.search(target-tempi);
  console.log(foundPair);
  if(foundPair==true){
    console.log(tempi);
    console.log(target-tempi);
    console.log("----------------");
  }else{console.log("not found");}
}
