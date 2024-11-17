const fs = require('fs');

// Get the file path from command-line arguments
const filePath = process.argv[2];

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file ${filePath}: ${err.message}`);
    return;
  }

  try {
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Check for required fields
    if (!jsonData.name || !jsonData.age) {
      console.error(
        'Missing required data in JSON file. Ensure the file contains both "name" and "age".'
      );
      return;
    }

    // Log success and data
    console.log('Successfully read JSON file:', jsonData);
  } catch (err) {
    console.error('Invalid JSON file format. Please provide a valid JSON file.');
  }
});
