# pets-safety-alerts-famousai
pets-safety-alerts-famousai

## Setup

This project uses the `jason` package for JSON parsing with template support.

### Installation

To install dependencies, run:

```bash
npm install
```

### Usage

The `jason` package is a JSON parser. Here's how to use it:

```javascript
const jason = require('jason');

// Parse JSON string
const data = jason('{"name": "Fluffy", "type": "cat"}');
console.log(data); // { name: 'Fluffy', type: 'cat' }
```

For more complex usage examples, see `example.js` in the project root.

## Dependencies

- **jason** (^2.0.0): A JSON parser for Node.js
