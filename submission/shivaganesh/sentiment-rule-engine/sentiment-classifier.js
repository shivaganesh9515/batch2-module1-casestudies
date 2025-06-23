const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Load sentiment rules from sentiment.json file
const sentimentPath = path.join(__dirname, 'sentiment.json');
const sentimentData = JSON.parse(fs.readFileSync(sentimentPath, 'utf8'));

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for a sentence
rl.question("Enter a sentence: ", (sentence) => {
  // Clean and split the sentence into words
  const cleaned = sentence.toLowerCase().replace(/[^\w\s]/g, '');
  const words = cleaned.split(/\s+/).filter(Boolean);

  console.log("🧾 Words:", words);

  // Initialize sentiment counters and flags
  let score = 0;
  let positiveCount = 0;
  let negativeCount = 0;
  let negateNext = false;

  // Loop through each word to calculate sentiment
  for (let word of words) {
    if (word === "but") {
      // Reset score and counts after "but" (rule: "but" changes sentiment focus)
      score = 0;
      positiveCount = 0;
      negativeCount = 0;
      continue;
    }

    if (sentimentData.negations.includes(word)) {
      // If word is a negation, invert the next sentiment word
      negateNext = true;
      continue;
    }

    if (sentimentData.positive.includes(word)) {
      // Positive word found
      positiveCount++;
      score += negateNext ? -1 : 1;
      negateNext = false;
    } else if (sentimentData.negative.includes(word)) {
      // Negative word found
      negativeCount++;
      score += negateNext ? 1 : -1;
      negateNext = false;
    } else {
      // Reset negation if word is neutral
      negateNext = false;
    }
  }

  // Determine overall sentiment
  let sentiment = 'Neutral';
  if (score > 0) sentiment = 'Positive';
  else if (score < 0) sentiment = 'Negative';

  // Output results
  console.log(`📊 Score: ${score}`);
  console.log(`📣 Sentiment: ${sentiment}`);
  rl.close();
});
