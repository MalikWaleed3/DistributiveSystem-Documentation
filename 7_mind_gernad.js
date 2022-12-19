const num1 = 5
const num2 = 10

function addValues() {
    console.log(`The sum is ${num1 + num2}`)
}

// If function is invoke, we can call it in other modules(files) and run it without exporting it.
addValues()