Why Use Promises Instead of Callbacks?
Avoid Callback Hell – Promises allow chaining with .then() instead of deeply nested callbacks, making code flatter and more readable.
Better Error Handling – A single .catch() can handle errors for an entire chain, rather than checking errors at each callback level.
Sequential Logic – Promises make it easier to manage asynchronous operations in a clear, sequential order.
Modern JavaScript – Promises are the foundation for async/await, enabling synchronous-style async code.

callbacks(nested)->

A(a => {
  B(b => {
    C(c => {
      // ... 
    });
  });
});

async await->

async function run() {
  try {
    const a = await A();
    const b = await B(a);
    const c = await C(b);
    // ...
  } catch (err) {
    console.error(err);
  }
}
run();
