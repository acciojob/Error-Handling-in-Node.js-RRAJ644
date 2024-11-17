const fs = require('fs')

const filePath = process.argv[2]

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file ${filePath}: ${err}`)
    return
  }

  try {
    const jsonData = JSON.parse(data)
    if (!jsonData.name || !jsonData.age) {
      console.error(
        'Missing required data in JSON file. Ensure the file contains both "name" and "age".'
      )
      return
    }
    console.log('Successfully read JSON file:', jsonData)
  } catch (err) {
    console.error('Invalid JSON file format. Please provide a valid JSON file.')
  }
})
