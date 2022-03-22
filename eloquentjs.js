// sum of a range 

console.log('sum of a range ')


function range(initial, end, step = 1) {
    arr = []
    for(let i = initial; !(i === end + step); i += step){
        arr.push(i);
    }
    return arr
}

function sum(arrayOfNums){
    return arrayOfNums.reduce((previous, currentValue) => previous + currentValue)
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

// reversing an array

console.log('reversing an array')

function reverseArray(arr) {
    newArr = []
    arr.forEach(element => {
        newArr.unshift(element)
    });
    return(newArr)
}
console.log(reverseArray(["A", "B", "C"]));


function reverseArrayInPlace(arr) {
    let interm
    for(let i = 0; i < Math.floor(arr.length / 2); i++){
        interm = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = interm
    }
}
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

// A list

console.log("A list")

function arrayToList(arr){
    if(arr.length=== 0) {
        return null
    }

    return {value: arr[0] , rest: arrayToList(arr.splice(1))}
}

function listToArray(list){
    arr = []
    for(let node = list; node; node = node.rest){
        arr.push(node.value)
    }
    return arr
}

function prepend(element, list){
    list = {value: element, rest: list}
    return list
}

function nth(list, num){
    if(num === 0){
        return list.value
    }
    else if(!list.rest) {
        return undefined
    }
    return nth(list.rest, num - 1)
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20