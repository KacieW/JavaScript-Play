function Thing(){
  this.table = [];
  this.pointer = function(key){
    var hash = 0;
    for(var i=0; i<key.length; i++){
      hash = hash + key.charCodeAt(i);
    }
    return hash %37;
  }
}

Thing.prototype.set=function(key, value){
  var myPosistion = this.pointer(key);
  var myTable = this.table;
  myTable[myPosistion] = value;
}

Thing.prototype.get = function(key){
  var myTable = this.table;
  var myPosistion = this.pointer(key);
  return myTable[myPosistion];
}
var thing = new Thing();
thing.set('x', 7);
//console.log(thing.get('x'));

