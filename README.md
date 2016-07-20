# scalafy-arrays
**scalafy-array** is a tiny library to add some functionalities to JavaScript's  Arrays.

The library adds several functions to improve `Array`s use in `JavaScript`. These functions are written in JavaScript, 
and all methods were tested and are compatible with Firefox and Chrome. 

## Setup & Installation
This library is really to install just run the next command>

```
bower install scalafy-arrays
```

After this, everything will be downloaded in your default bower's folder or `bower_components`. So you have to add the 
library your `html` file.

```html
<script src="bower_components/scalafy-arrays/dist/scalafy-arrays.js"></script>
```
## What does it add?
- `count(f?)` Counts the number of elements in array which satisfy a predicate (f) if f is not defined then it counts all 
elements.
 
```javascript
    var arr = [1, 2, 3, 4];
    
    console.log(arr);    // 4
    console.log(arr.count(function(e){     // 2
        return e % 2 === 0;
    })); 
```

- `diff(that)` Computes the multiset difference between this array and another array.

```javascript
    var arr = [1, 2, 3];
    
    console.log(arr.diff([1,3]));    // [2]
``` 

- `distinct` Finds all different elements in an array.

```javascript
    var arr = [1, 1, 2, 2, 3, 3];
    
    console.log(arr.distinct());    // [1, 2, 3]
```

- `exists` Tests whether a predicate holds for at least one element of this array.

```javascript
    console.log(arr.exists(function(e){    // true
        return e === 2;
    }));    
```

- `filterNot` Selects all elements of this array which don't satisfy a predicate. I.E. is like `filter` but the opposite.

```javascript
    var arr = [1, 2, 3, 4];
    
    console.log(arr.filterNot(function(e){    // [1, 3]
        return e % 2 == 0;
    }));
``` 

- `flatMap` Receives a mapping function and executes the function for every element in the array and flatten the result.

```javascript
    var arr = [[1, 2], [3, 4]];
    
    console.log(a.flatMap(e){ //
        return e;
    });
```
