![build](https://travis-ci.org/masterZSH/gbit.svg?branch=master)


## Instruction

 This package is find the value of 1 in the binary representation of an integer number

##

## Install 

```js
  npm i gbit
```

## Usage
```js
    const gbit = require('gbit');
    gbit(20); 
```

## Examples

```js
    gbit(20);  
```
output [2,4]


20->10100

|1|0|1|0|0|
|---|---|---|---|---|
|4||2|||




## Perfermance
```js
function defaultGetKeys(num){
    let nStr = Number(num).toString(2);
    let keys = [],len = nStr.length;
    for(let i =0;i<len;i++){
        nStr[i] === '1' && keys.push(len-1-i)
    }
    return keys;
}    

let start = Date.now();
for(let i=0;i<10000000;i++){
    defaultGetKeys(66666666); // 9596ms
    getKeys(66666666); // 4596ms fast
}
let stop = Date.now();
console.log(stop-start)
```



