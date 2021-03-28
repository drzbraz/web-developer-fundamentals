const deadline = document.getElementById('deadline')
const fees = document.getElementById('fees')
const price = document.getElementById('price')

const monthFees = calcFessMonth(fees.value)
const deadlineMonth = calcDeadline(deadline.value)
const amortization = calcAmortization(price.value, deadlineMonth)
const feesValues = calcFeesValue(price.value, amortization, monthFees)

const totalFees = feesValues.map((feesValue) =>
    (feesValue + amortization).toFixed(2)
)
console.log(totalFees)

function calcFessMonth(annualFees) {
    const monthFeesCalc = Math.pow(parseFloat(annualFees) + 1, 1 / 12) - 1
    return monthFeesCalc
}

function calcDeadline(deadlineValue) {
    const deadlineCalc = deadlineValue * 12
    return deadlineCalc
}

function calcAmortization(totalValue, totalPlots) {
    const amortizationCalc = totalValue / totalPlots
    return amortizationCalc
}

function calcFeesValue(totalValue, amortizationValue, monthFeesValue) {
    let arrayValues = []

    for (let index = 0; index < 5; index++) {
        arrayValues.push(
            (totalValue - index * amortizationValue) * monthFeesValue
        )
    }

    return arrayValues
}

window.addEventListener('submit', (event) => {
    event.preventDefault()
})
