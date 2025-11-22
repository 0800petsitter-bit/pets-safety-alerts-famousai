// Example usage of the jason package
const jason = require('jason');

// Parse JSON string
const petData = jason('{"name": "Fluffy", "type": "cat", "age": 3}');
console.log('Pet data:', petData);

// Parse another example with array
const alertsData = jason('[{"alert": "Low food", "priority": "high"}, {"alert": "Vet appointment", "priority": "medium"}]');
console.log('Alerts data:', alertsData);

// Example with template literals (jason supports template-like parsing)
const complexData = jason('{"pet": {"name": "Buddy", "species": "dog"}, "alerts": ["vaccination due", "grooming scheduled"]}');
console.log('Complex data:', complexData);
