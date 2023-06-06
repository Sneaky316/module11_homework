function simpleNumbTest() {
    let rndmNumber = Math.round(Math.random()*1100) //получаем рандомное целое число
    let noRem = 0
    if (rndmNumber > 1000) {
        console.log(`Число ${rndmNumber} больше 1000!`)       
    } else {
        switch (rndmNumber) {
            case 0:
                noRem = 2
                console.log(`${rndmNumber} не учитывается в задании!`)                               
                break;
            case 1:
                console.log(`${rndmNumber} не учитывается в задании!`)               
                break;
            default:
                for (let i = 2; i < rndmNumber; i++){
                    remainDevRes = rndmNumber % i                    
                    if (remainDevRes === 0) {
                        noRem++                     
                    }                         
                }
                break;                
        }
        switch (noRem) {
            case 0:
                console.log(`${rndmNumber} простое!`)
                break;
            case 1:
                console.log(`${rndmNumber} простое!`)
                break;       
            default:
                console.log(`${rndmNumber} не  простое!`)
                break;
        }          
    }
} 
simpleNumbTest()
/*  */