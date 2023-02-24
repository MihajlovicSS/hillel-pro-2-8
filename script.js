'use strict'
function createCalculator(base){
    let currentCount = base
    return {
        add: (number) => {
            if(!isNaN(number)) currentCount += number
        },
        sub: (number) => {
            if(!isNaN(number)) currentCount -= number
        },
        set: (newBase) => {
            if(!isNaN(newBase)) currentCount = newBase
        },
        get: () => {
            return currentCount
        },
        reset: () => {
            currentCount = base
        }
    }
}
const calculator = createCalculator(100);
console.log(calculator.get()) // 100
calculator.add(10)
calculator.add(10);
console.log(calculator.get()) // 120
calculator.sub(20)
console.log(calculator.get()) // 100
calculator.set(20)
console.log(calculator.get()) //20
calculator.add(10)
calculator.add(10)
calculator.add('qwe')
console.log(calculator.get()) // 40
calculator.reset()
console.log(calculator.get()) // 100