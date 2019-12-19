console.log('utils.js is running');

// Named Exports
// 1. Declare export separately.
const square = (x) => x * x;
export { square };
// 2. Short-hand "export" is the same thing as declaring the export below.
export const add = (a, b) => a + b;

// Default export
// 1. Basic default export 
const subtract = (a, b) => a - b;
export { subtract as default };
// 2. Short-hand default export:
// export default subtract;
// 3. Extra shirt-hand default export with just the expression:
// export default (a, b) => a - b;