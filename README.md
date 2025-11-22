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

The `jason` package is a JSON parser with template support. Here's how to use it:

```javascript
const jason = require('jason');

// Parse JSON string with template support
const data = jason('{"name": "Fluffy", "type": "cat"}');
console.log(data);
```

## Dependencies

- **jason** (^2.0.0): JSON with template support
