const fs = require('fs');
const path = require('path');

// Step 1: Get the full path to dictionary.txt
const filepath = path.join(__dirname, "data", "dictionary.txt");

// Step 2: Read the file
const data = fs.readFileSync(filepath, 'utf8');

// Step 3: Split into lines
const lines = data.split('\n');

// Step 4: Clean and convert each line into word+frequency
const dictionary = [];

for (let line of lines) {
  const cleaned = line.trim().toLowerCase().replace(/[^\w\s]/g, '');
  const [word, freqStr] = cleaned.split(" ");
  const frequency = parseInt(freqStr);

  if (word && !isNaN(frequency)) {
    dictionary.push({ word, frequency });
  }
}
const Trie = require('./trie'); // Importing the Trie class
const trie = new Trie(); // Creating an instance of the Trie

for (let line of lines) {
  const cleaned = line.trim().toLowerCase().replace(/[^\w\s]/g, '');
  const [word, freqStr] = cleaned.split(" ");
  const frequency = parseInt(freqStr);

  if (word && !isNaN(frequency)) {
    trie.insert(word, frequency); // Insert each word with its frequency into the Trie
  }
}
let stack = []; // to store each character like ['a', 'p', 'p']




// Step 5: Print to verify
console.log(dictionary);
 console.log("Trie build is done");

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter Your Search Prefix: ", (prefix) => {
    const cleanedInput = prefix.trim().toLowerCase();
    // Handle empty input
if (cleanedInput.length === 0)
{
    console.log("Please enter a prefix to search.")
    readline.close();
    return;
}   

// Handle prefix shorter than 2-3 characters 
if (cleanedInput.length < 2)
{
    console.log("Please enter at least 2 characters")
    readline.close();
    return;
}

//get suggestions from trie
const suggestions = trie.getSuggestions(cleanedInput);

if (suggestions.length === 0){
    console.log("no suggestions found")
}
else{
    console.log("suggestions");
    suggestions.forEach((s, i) => {
        console.log(`${i + 1}. ${s.word} (${s.frequency})`);
    });
}
readline.close();
});


