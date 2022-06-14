let salary = 500
let employeeContributionRate = 0.05
let pension = salary * employeeContributionRate
let taxableSalary = salary - pension

let taxRateBetween80And250 = 0.04
let taxRateBetween250And450 = 0.08
let taxRateOver450 = 0.1

let taxBetween80And250
if (taxableSalary >= 250) {
    taxBetween80And250 = 170 * taxRateBetween80And250
} else if (taxableSalary > 80) {
    taxBetween80And250 = (taxableSalary - 80) * taxRateBetween80And250
} else {
    taxBetween80And250 = 0
}

let taxBetween250And450
if (taxableSalary >= 450) {
    taxBetween250And450 = 200 * taxRateBetween250And450
} else if (taxableSalary > 250) {
    taxBetween250And450 = (taxableSalary - 250) * taxRateBetween250And450
} else {
    taxBetween250And450 = 0
}

let taxOver450
if (taxableSalary > 450) {
    taxOver450 = (taxableSalary - 450) * taxRateOver450
} else {
    taxOver450 = 0
}

let totalTaxes = taxBetween80And250 + taxBetween250And450 + taxOver450

let netSalary = salary - pension - totalTaxes

console.log(`
    Gross salary: ${salary.toFixed(2)} €
    Employee contribution: ${pension.toFixed(2)} €
    Taxable salary: ${taxableSalary.toFixed(2)} €
  
    Taxes:
    - Between 80 and 250: ${taxBetween80And250.toFixed(2)}€
    - Between 250 and 450: ${taxBetween250And450.toFixed(2)} €
    - Over 450: ${taxOver450.toFixed(2)} €
    Total: ${totalTaxes.toFixed(2)} €
  
    Net salary: ${netSalary.toFixed(2)} €
  `)