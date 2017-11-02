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


function split(arr){
  if(arr.length < 2){
    return arr;
  } else{
    var midpoint = Math.floor(arr.length / 2);
    var firstHalf = arr.slice(0, midpoint);
    var secondHalf = arr.slice(midpoint);
  }
  return merge(split(firstHalf), split(secondHalf));
};

function merge(arr1, arr2){
var result = [];
while(arr1.length || arr2.length){
  if(arr1[0] <= arr2[0]){
    var shifted = arr1.shift();
    result.push(shifted);
  } else{
    var shifted = arr2.shift();
    result.push(shifted);
  }
}
return result;

};