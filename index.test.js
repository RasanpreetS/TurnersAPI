const { calculateRisk } = require('./index');


// Test case 1: One trigger word present in the input
test('One trigger word present', () => {
  const input = "it was minor accident.";
  const result = calculateRisk(input);
  expect(result).toBe(1);
});

// Test case 2: Multiple trigger words present in the input
test('Multiple trigger words present', () => {
  const input = "I crashed the car and bumped the pole.";
  const result = calculateRisk(input);
  expect(result).toBe(2);
});

// Test case 3: All trigger words present in the input
test('All trigger words present', () => {
  const input = "There are multiple reason like collideb rash scratch bump smash";
  const result = calculateRisk(input);
  expect(result).toBe(5);
});

// Test case 4: Trigger words present in different cases
test('Trigger words present in different cases', () => {
  const input = "I saw a Crash and a SMASH.";
  const result = calculateRisk(input);
  expect(result).toBe(2);
});