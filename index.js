// Add your functions here


function map(array,func){
    const newArray = []
    for (let i=0; i < array.length; i++) {
        newArray.push(func(array[i]))
    }
    return newArray
}



function reduce(arr, func, start=0) {
    let rt = !!start ? start : arr[0]
    let i = !!start ? 0 : 1
    for ( ; i < arr.length; i++) {
        rt = func(arr[i], rt)
    }
    return rt
}


