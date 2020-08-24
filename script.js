let each = function(arr, callback, thisArg) {
  let i, length = arr.length;
  for (i = 0; i < length; i = i + 1) {
    callback(arr[i], i, arr);
  }
};

each([1, 2, 3], function(num, i, nums) {
  console.log('Number: ' + num + ', index: ' + i + ',', nums)
});


let map = function(arr, callback, thisArg) {
  var i, length = arr.length, results = [];
  for (i = 0; i < length; i = i + 1) {
    results.push(callback.call(thisArg, arr[i], i, arr));
  }
  return results;
};

let pows = map([10, 20, 30], Math.pow);
let languages = map(['JavaScript', 'C++', 'Python'], function(framework) {
  return framework.slice(0, 5);
});
console.log(pows); 
console.log(languages);


let filter = function(arr, callback, thisArg) {
  let i, length = arr.length, results = [];
  for (i = 0; i < length; i = i + 1) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      results.push(arr[i]);
    }
  }
  return results;
};

let strs = ['This is', ',', 'Developers', 'World', '!'];

let data = filter(strs, function(str) {
  return str.toLowerCase() !== str;
});

console.log(data); 



let some = function(arr, callback, thisArg) {
  let i, length = arr.length;
  for (i = 0; i < length; i = i + 1) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
};

let every = function(arr, callback, thisArg) {
  let i, length = arr.length;
  for (i = 0; i < length; i = i + 1) {
    if (!callback.call(thisArg, arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};


let reduce = function(arr, callback, startValue) {
  let i, length = arr.length, result = startValue;
  for (let i = 0; i < length; i = i + 1) {
    result = callback.call(null, result, arr[i], i, arr);
  }
  return result;
};

const find = (arr, cb) => {
  for(let i = 0; i < arr.length; i++) {
      if(cb(arr[i], i, arr)) {
          return arr[i];
      };
  };
  return undefined;
};


console.log(find);