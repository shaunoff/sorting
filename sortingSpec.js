describe('A bubble sort', function(){
  // var bubbleSort;
  //var type;
  var bubbleSort;
  var bubbleSort2;
  var start1 = [6,7,8,3,5,6,1]
  var start2 = [36,40,45,51]
  beforeEach(function(){
    //type = bubbleSort();
    bubbleSort = new BubbleSort(start1)
    bubbleSort2 = new BubbleSort(start2)
  });
  // it('returns an array', function(){
  //   expect(Array.isArray(type)).toEqual(true);
  // });
  it('returns an array', function(){
    expect(Array.isArray(bubbleSort.startArray)).toEqual(true);
  });

  it('should have methods named `sort`, `and others`', function() {
    expect(typeof bubbleSort.sort).toBe('function');
    expect(typeof bubbleSort.compare).toBe('function');
  });

  it('compare returns lower number', function(){
    expect(bubbleSort.compare(start1[0], start1[1])).toEqual(false);
  });

  it('sort', function(){
    expect(bubbleSort.sort(start1)).toEqual([6,7,3,5,6,1,8]);
  });

  it('iterate', function(){
    expect(bubbleSort.iterate(start1)).toEqual([1,3,5,6,6,7,8]);
    expect(bubbleSort2.iterate(start2)).toEqual([36,40,45,51]);
  });

});


describe('Merge sort', function(){
  var megeSort;
  var startArray = [1,2,3,4,5];
  var start2 = [36,40,45,51];
  var start3 = [2,4,5,6,1,3];
  megeSort = merge(startArray, start2);


  it('returns an array', function(){
    expect(megeSort).toEqual([1,2,3,4,5,36,40,45,51]);
  });


})