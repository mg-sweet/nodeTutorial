const adding = (a, b) => a + b
const PI = 3.2

class SomeClass {
    constructor() {
        console.log('Some Class Created!')
    }
}

module.exports = { sum : adding, someClass : SomeClass, pi : PI}