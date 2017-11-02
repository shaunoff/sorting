function bubbleSort(){
	return [];
};

function BubbleSort(arr){
	this.startArray = arr
  this.currentArray = this.startArray
  this.iterations = arr.length-1
};
BubbleSort.prototype.sort = function(arr){
  for(var i= 0; i<arr.length; i++){
    if(this.compare(arr[i],arr[i+1])){
      var temp = arr[i]
      arr[i] = arr[i+1]
      arr[i+1] = temp
    }
  }
  return arr
}
BubbleSort.prototype.compare = function(num1,num2){
  return num1 > num2 ? true : false
}
BubbleSort.prototype.iterate = function(){
  while(this.iterations){
    this.sort(this.currentArray)
    this.iterations-=1
  }
  return this.currentArray
}
