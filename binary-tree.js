function Node(key){
  this.key = key;
  this.left = null;
  this.right = null;
}

function BinarySearchTree(){
  this.root = null;
}
//++++++++  add node to a tree +++++++++++++++++++++++++//
BinarySearchTree.prototype.insert = function(key){
  var root = this.root;
  var myNode = new Node(key);
  //console.log(myNode);

  if(root === null){
    //console.log(root);
    this.root = myNode;
   //console.log(this.root);
  }else{
    //console.log("myNode is not null");
    insertNode(root, myNode);
  }
}
var insertNode = function(node, myNode){

  if(myNode.key < node.key){
    if(node.left==null){
      node.left = myNode;
    }else{
      insertNode(node.left, myNode);
      if(node.left!==null){
        if ((heightNode(node.left) - heightNode(node.right)) > 1){ 
          console.log("verify balancing needed");
        } 
      }
    }
  }else{
    if(node.right ==null){
      node.right = myNode;
    }else{
      insertNode(node.right, myNode);
      if(node.right!==null){
        if((heightNode(node.right) - heightNode(node.left)) > 1){ 
          console.log("verify balancing needed for right");
        }
      }
    }
  }
};

var heightNode = function(node) { 
  if (node === null) { 
    return -1; 
  } else { 
    return Math.max(heightNode(node.left), heightNode(node.right)) + 1; 
  } 
};
