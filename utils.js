
// Find the value of the car based on model and year for API1
function calculateValue(model, year) {
    // Convert model to lowercase
    const carModel = model.toLowerCase();
    // For loop to assign a value for each letter
    let modelValue = 0;
    for (let i = 0; i < carModel.length; i++) {
        const charCode = carModel.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) {
            modelValue += charCode - 96;
        }
    }
    // Multiply the alphanumeric total by 100 and add the year to find carValue
    return modelValue * 100 + year;
}


// Find the risk rating from the user's input for API2
function calculateRisk(input) {
    // List an array of words to use as triggers
    const triggerWords = ["collide", "crash", "scratch", "bump", "smash"];
    let count = 0;
    // Split the user input into words
    const words = input.split(" ");
    // For loop to check the word list against the triggers and add a count for each
    for (const word of words) {
        if (
            triggerWords.some((trigger) =>
                word.toLowerCase().includes(trigger.toLowerCase())
            )
        ) {
            count++;
        }
    }
    // Check that the rating returned will be at least 1, and no more than 5
    count = Math.min(Math.max(count, 1), 5);
    return count;
}

// Find the yearly and monthly premium for API3
function createQuote(value, risk) {
    const yearly = (value * risk) / 100;
    const monthly = yearly / 12;
    const result = {
        monthly_premium: monthly,
        yearly_premium: yearly,
    };
    return result;
}

module.exports = { calculateValue, calculateRisk, createQuote };