// =======================================
// JavaScript Execution Context & Memory
// =======================================

// 💡 Global Execution Context is created
// Step 1: Memory Allocation Phase
// Variables and functions are stored in memory with initial values

let num1 = 10;          // memory: num1 → undefined → 10
let num2 = 20;          // memory: num2 → undefined → 20

function add(a, b) {
  // A new Execution Context is created when this function runs
  // Memory phase: a → undefined, b → undefined
  // Execution phase: a = num1, b = num2
  return a + b;
}

// Step 2: Code Execution Phase (runs line-by-line)
{
  // This is a code block
  let result = add(num1, num2);  // Execution Context for `add()` is created
  console.log("Result is:", result); // Output: 30
}

// Outside the block
console.log("Execution Complete ✅");
