function getSum(Numb){
    return function arg2(Numb2){
        return Numb+Numb2        
    };
}

let result = getSum(2)(5)
console.log(result);
