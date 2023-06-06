function evensNumber(){
    const arr = [0,1,2,'asdad',23,68,null,NaN,false,"text",24,69,33]; 
    const evenNumbers = arr.filter((item) => typeof item === 'number' && item % 2 === 0 && item !== 0);
    const oddNumbers = arr.filter((item) => typeof item === 'number' && item % 2 !== 0);
    const zeros = arr.filter((item) => item === 0);

    console.log(`Нечетных чисел ${oddNumbers.length}`);
    console.log(`Четных чисел ${evenNumbers.length}`);
    console.log(`Нулей ${zeros.length}`);
}
evensNumber()
