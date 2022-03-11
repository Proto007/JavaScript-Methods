// FOR EACH //
// COPIED FROM THE CODE GIVEN BY PROFESSOR LAI
Array.prototype.myEach = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
    if (this[i] === undefined) continue;
    // callbackFn can take up to 3 input parameters:
    // element
    // element, index
    // element, index, array
    callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
  }
};

///////////////////////////////////////////////////myEach Testing code/////////////////////////////////////////////////////////
// Test myEach against the native forEach to ensure that myEach works as the same as forEach
/*let myArray = [1,2,,4,5];   // Array called by the function

// Test with 1 parameter: element
console.log("myEach (1 parameter): element");
myArray.myEach(x => console.log(x));   // Parameter: x => console.log(x)
console.log("forEach (1 parameter): element");
myArray.forEach(x => console.log(x));   // Parameter: x => console.log(x)

// Test with 2 parameters: element, index
console.log("myEach (2 parameters): element, index");
myArray.myEach((x,i) => console.log(x,i));   // Parameter: (x,i) => console.log(x,i)
console.log("forEach (2 parameters): element, index");
myArray.forEach((x,i) => console.log(x,i));   // Parameter: (x,i) => console.log(x,i)

// Test with 3 parameters: element, index, array
console.log("myEach (3 parameters): element, index, array");
myArray.myEach((x,i,myArray) => console.log(x,i,myArray));   // Parameter: (x,i,myArray) => console.log(x,i,myArray)
console.log("forEach (3 parameters): element, index, array");
myArray.forEach((x,i,myArray) => console.log(x,i,myArray));   // Parameter: (x,i,myArray) => console.log(x,i,myArray)

// Original array is not affected
console.log("Original array:");
console.log(myArray);*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// MAP //
Array.prototype.myMap = function(callbackFn) {
  //Create new array which would be equal to size of 'this' array
  let new_arr=new Array(this.length);
  //for each of the elements of 'this' array
  for(let i=0;i<this.length;i++){
    //if ith element is undefined, continue to next element
    if(this[i]===undefined) continue;
    //set ith element of new array equal to the result of calling callbackFn on the ith element, ith index and array of 'this' array
    new_arr[i]=callbackFn(this[i],i,this);
  }
  //return new_arr
  return new_arr;
};

///////////////////////////////////////////////////myEach Testing code/////////////////////////////////////////////////////////
// Test myMap against the native map to ensure that myEach works as the same as map
/*let myArray = [1,2,,4,5];
console.log("Original array: ",myArray,'\n')
// Test with 1 parameter: element
console.log("myMap (1 parameter): element");
console.log("Mapped array: ",myArray.myMap(x => x*3));
console.log("map (1 parameter): element"); 
console.log("Mapped array: ",myArray.map(x => x*3));


// Test with 2 parameters: element, index
console.log("myMap (2 parameters): element, index");
console.log("Mapped array: ",myArray.myMap((x,i) => x*(i+3)));
console.log("map (2 parameters): element, index");
console.log("Mapped array: ",myArray.map((x,i) => x*(i+3)));

// Test with 3 parameters: element, index, array
console.log("myMap (3 parameters): element, index, array");
console.log("Mapped array: ",myArray.myMap((x,i,arr) => x*(arr[i]+3)));
console.log("map (3 parameters): element, index, array");
console.log("Mapped array: ",myArray.map((x,i,arr) => x*(arr[i]+3)));

//Original array remains unchanged
console.log("\nOriginal array: ",myArray);*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// SOME //
Array.prototype.mySome = function(callbackFn) {
  //for each of the elements of 'this' array
  for(let i=0;i<this.length;i++){
    //return true if callback function returns true for ith element, ith index and 'this' array
    if(callbackFn(this[i],i,this)===true) return true;
  }
  //return false
  return false;
};

///////////////////////////////////////////////////myEach Testing code/////////////////////////////////////////////////////////
// Test mySome against the native some to ensure that mySome works as the same as some
/*let myArray = [1,2,,4,5];
console.log("Original array: ",myArray,'\n')
// Test with 1 parameter: element
console.log("mySome (1 parameter): element");
console.log("Result 1: ",myArray.mySome(x => (x<5)));
console.log("Result 2: ",myArray.mySome(x => (x>5)));
console.log("some (1 parameter): element"); 
console.log("Result 1: ",myArray.some(x => (x<5)));
console.log("Result 2: ",myArray.some(x => (x>5)));


// Test with 2 parameters: element, index
console.log("myMap (2 parameters): element, index");
console.log("Result 1: ",myArray.mySome((x,i) => (x==i)));
console.log("Result 2: ",myArray.mySome((x,i) => (x>i)));
console.log("map (2 parameters): element, index");
console.log("Result 1: ",myArray.some((x,i) => (x==i)));
console.log("Result 2: ",myArray.some((x,i) => (x>i)));

// Test with 3 parameters: element, index, array
console.log("myMap (3 parameters): element, index, array");
console.log("Result 1: ",myArray.mySome((x,i,arr) => (x%(arr.length/i)==0)));
console.log("Result 2: ",myArray.mySome((x,i,arr) => (x%(arr.length/i)==10)));
console.log("map (3 parameters): element, index, array");
console.log("Result 1: ",myArray.some((x,i,arr) => (x%(arr.length/i)==0)));
console.log("Result 2: ",myArray.some((x,i,arr) => (x%(arr.length/i)==10)));

//Original array remains unchanged
console.log("\nOriginal array: ",myArray);*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// REDUCE //
Array.prototype.myReduce = function() {
  // Place your code here.
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement,fromIndex=0) {
  //for each of the elements of 'this' array starting from fromIndex
  for(let i=fromIndex;i<this.length;i++){
    //return true if search element is the ith element
    if(this[i]===searchElement) return true;
  }
  //return false
  return false;
};

///////////////////////////////////////////////////myEach Testing code/////////////////////////////////////////////////////////
// Test myIncludes against the native includes to ensure that myIncludes works as the same as includes
/*let myArray = [1,2,,4,5];
console.log("Original array: ",myArray,'\n')
// Test with 1 parameter: searchElement
console.log("myIncludes (1 parameter): searchElement");
console.log("Result 1: ",myArray.myIncludes(1));
console.log("Result 2: ",myArray.myIncludes(0));
console.log("includes (1 parameter): searchElement"); 
console.log("Result 1: ",myArray.includes(1));
console.log("Result 2: ",myArray.includes(0));

// Test with 2 parameters: searchElement, fromIndex
console.log("myIncludes (2 parameter): searchElement, fromIndex");
console.log("Result 1: ",myArray.myIncludes(2,1));
console.log("Result 2: ",myArray.myIncludes(1,2));
console.log("includes (2 parameter): searchElement, fromIndex"); 
console.log("Result 1: ",myArray.includes(2,1));
console.log("Result 2: ",myArray.includes(1,2));

//Original array remains unchanged
console.log("\nOriginal array: ",myArray);*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement,fromIndex=0) {
    //for each of the elements of 'this' array starting from fromIndex
    for(let i=fromIndex;i<this.length;i++){
      //return index i if search element is the ith element
      if(this[i]===searchElement) return i;
    }
    //return -1 if element not found
    return -1;
};

///////////////////////////////////////////////////myEach Testing code/////////////////////////////////////////////////////////
// Test myIndexOf against the native indexOf to ensure that myIndexOf works as the same as indexOf
/*let myArray = [1,2,,4,5];
console.log("Original array: ",myArray,'\n')
// Test with 1 parameter: searchElement
console.log("myIndexOf (1 parameter): searchElement");
console.log("Result 1: ",myArray.myIndexOf(1));
console.log("Result 2: ",myArray.myIndexOf(0));
console.log("indexOf (1 parameter): searchElement"); 
console.log("Result 1: ",myArray.indexOf(1));
console.log("Result 2: ",myArray.indexOf(0));

// Test with 2 parameters: searchElement, fromIndex
console.log("myIndexOf (2 parameter): searchElement, fromIndex");
console.log("Result 1: ",myArray.myIndexOf(4,1));
console.log("Result 2: ",myArray.myIndexOf(1,2));
console.log("indexOf (2 parameter): searchElement, fromIndex"); 
console.log("Result 1: ",myArray.indexOf(4,1));
console.log("Result 2: ",myArray.indexOf(1,2));

//Original array remains unchanged
console.log("\nOriginal array: ",myArray);*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PUSH //
// COPIED FROM THE CODE GIVEN BY PROFESSOR LAI
Array.prototype.myPush = function(...args) {
  let args_index = 0;  // Index of new element
  let length = this.length;   // Length of "this" array
  // The last element of "this" array is at length - 1
  for (let i = length; i < length + args.length; i++) {
      this[i] = args[args_index];  // Add new element to end of "this" array
      args_index++;
  }
  return this.length;  // Return new length of "this" array
};

///////////////////////////////////////////////////myPush Testing code/////////////////////////////////////////////////////////
/*// Test myPush against the native Push to ensure that myPush works as the same as Push
let myArray = [1,2,3,4,5];   // Array called by the function
console.log("myPush:");
console.log(myArray.myPush(6,7,8));   // Output returned array length
console.log(myArray);   // Output [1,2,3,4,5,6,7,8]

myArray = [1,2,3,4,5];   // Array called by the function
console.log("Push:");
console.log(myArray.push(6,7,8));   // Output returned array length
console.log(myArray);   // Output [1,2,3,4,5,6,7,8]*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement,fromIndex=this.length) {
    //for each of the elements of 'this' array starting from fromIndex and going to index 0
    for(let i=fromIndex;i>=0;i--){
      //return index i if search element is the ith element
      if(this[i]===searchElement) return i;
    }
    //return -1 if element not found
    return -1;
};

///////////////////////////////////////////////////myEach Testing code/////////////////////////////////////////////////////////
// Test myLastIndexOf against the native lastIndexOf to ensure that myLastIndexOf works as the same as lastIndexOf
/*let myArray = [1,2,,4,5,1,2];
console.log("Original array: ",myArray,'\n')
// Test with 1 parameter: searchElement
console.log("myLastIndexOf (1 parameter): searchElement");
console.log("Result 1: ",myArray.myLastIndexOf(1));
console.log("Result 2: ",myArray.myLastIndexOf(0));
console.log("lastIndexOf (1 parameter): searchElement"); 
console.log("Result 1: ",myArray.lastIndexOf(1));
console.log("Result 2: ",myArray.lastIndexOf(0));

// Test with 2 parameters: searchElement, fromIndex
console.log("myLastIndexOf (2 parameter): searchElement, fromIndex");
console.log("Result 1: ",myArray.myLastIndexOf(4,1));
console.log("Result 2: ",myArray.myLastIndexOf(2,2));
console.log("lastIndexOf (2 parameter): searchElement, fromIndex"); 
console.log("Result 1: ",myArray.lastIndexOf(4,1));
console.log("Result 2: ",myArray.lastIndexOf(2,2));

//Original array remains unchanged
console.log("\nOriginal array: ",myArray);*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// KEYS //
Object.myKeys = function(obj) {
  //create an empty array which will be returned once its polluted
  let return_arr= new Array();
  //function_names is an array with names of methods that are introduced in this file for array.prototype
  let function_names=['myEach', 'myMap', 'mySome', 'myReduce', 'myIncludes', 'myIndexOf', 'myPush', 'myLastIndexOf'];
  //for loop iterates through indexes in obj
  for(i in obj){
    //add i to return_arr if its not in function_names
    if(!function_names.includes(i)) return_arr.push(i);
  }
  return return_arr;
};

///////////////////////////////////////////////////myEach Testing code/////////////////////////////////////////////////////////
// Test myLastIndexOf against the native lastIndexOf to ensure that myLastIndexOf works as the same as lastIndexOf
/*let myDict = {5:"five",1:"one",2:"two",3:"three",4:"four"};
let myArr=['a','b','c',,'e'];
console.log(myArr.length);
console.log("Original dictionary: ",myDict,'\n');
console.log("Original array: ",myArr,'\n');

// Test with 1 parameter: object(dictionary)
console.log("myKeys (object(dictionary))");
console.log("Result: ",Object.myKeys(myDict));
console.log("keys (object(dictionary))"); 
console.log("Result: ",Object.keys(myDict));

// Test with 1 parameter: object(array)
console.log("myKeys (object(array))");
console.log("Result: ",Object.myKeys(myArr));
console.log("keys (object(array))"); 
console.log("Result: ",Object.keys(myArr));

//Original array and dictionary remains unchanged
console.log("\nOriginal dictionary: ",myDict);
console.log("\nOriginal array: ",myArr);*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VALUES //
Object.myValues = function() {
  // Place your code here.
};