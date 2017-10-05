# rpn-array
Javascript Reverse Polish calculator

## Usage

ES5

```
var rpn = require('rpn-array');

var result = [1, 2, rpn.add].rpn(); //3
```

The package contains some functions for common operations.
`rpn.add`  
`rpn.subtract`  
`rpn.multiply`  
`rpn.divide`  

You can also supply your own functions for performing operations

```
function customOperation(a, b) {
  return (a - b) / 2;
}

var result = [20, 6, customOperation].rpn() //7
```
