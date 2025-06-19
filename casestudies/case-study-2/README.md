## 📘 **Sentiment Classifier with Custom Rule Engine (No ML)**

---

### 📌 **Project Title:**

**Sentiment Classifier with Custom Rule Engine (Offline NLP – No ML)**

---

### 📝 **Problem Statement:**

Design and implement a **rule-based sentiment analysis system** that classifies a given sentence as **Positive**, **Negative**, or **Neutral**. The system should simulate intelligent natural language processing using only core **Data Structures and Algorithms (DSA)** — without using any machine learning models or libraries.

---

### 🎯 **Learning Objectives:**

- Understand and implement **Hash Tables** for storing word dictionaries.
- Use **Stacks** to track sentiment flips due to negations (e.g., “not bad”).
- Apply **Arrays and Linked Lists** for sentence tokenization and processing.
- Practice building a basic **rule engine** using conditional logic and DSA.
- Analyze algorithm complexity and optimize for performance.

---

### 📦 **Deliverables:**

1. Source code (in Python, Java, or JavaScript)
2. A `sentiment.txt` or `.json` file with word dictionaries
3. README with setup instructions and example use cases
4. Technical Report:

   - Data structures used
   - Sentiment rules implemented
   - Sample test cases
   - Time/space complexity analysis

5. Optional: CLI or simple web UI

---

### 📐 **Constraints:**

- Must use a **predefined list** of positive and negative words (open-source sentiment lexicons such as AFINN or custom .txt files)
- No external ML libraries (e.g., `sklearn`, `nltk`, `transformers`, etc.)
- System must handle:

  - **Simple negations**: e.g., “not good” → negative
  - **Intensifiers** (optional): e.g., “very bad”, “extremely happy”

- Minimum sentence length: 3 words
- Handle **punctuation, casing**, and empty input
- Must print/return: `Positive`, `Negative`, or `Neutral`

---

### 📊 **Expected Outcomes:**

- Input:
  `"The food was not bad"` → Output: `Positive`
  `"Service was slow and terrible"` → Output: `Negative`
  `"It was okay"` → Output: `Neutral`

- System should process sentences in **< 100ms** for up to 100-word input

- Clean implementation using modular design and appropriate DSA concepts

---

### 🚀 **Bonus Objectives (Optional):**

- Support **score-based sentiment** (e.g., `Score: +3 → Positive`)
- Handle **conjunctions** like “but” (e.g., “The food was bad but service was excellent” → Positive)
- Track **sentence structure** using basic **parse tree or phrase tree** (Tree structure)

---

### 📈 **Evaluation Rubric:**

| Criteria                        | Excellent (10)                                 | Good (7)                 | Fair (4)                   | Poor (1)                   |
| ------------------------------- | ---------------------------------------------- | ------------------------ | -------------------------- | -------------------------- |
| **Correctness & Functionality** | Fully functional, all cases handled            | Mostly works, minor bugs | Limited functionality      | Crashes or wrong results   |
| **DSA Application**             | Hashing, Stacks, Arrays, etc. used effectively | Moderate use of DSA      | Weak or improper usage     | DSA not applied properly   |
| **Rule Engine Design**          | Well-defined, handles complex rules            | Covers basics only       | Basic or shallow logic     | No real logic or rules     |
| **Code Quality & Structure**    | Modular, clean, documented                     | Acceptable, mostly clean | Poor structure or comments | Unstructured or messy code |
| **Efficiency & Performance**    | Fast, optimized logic                          | Acceptable speed         | Sluggish with long input   | Slow or unresponsive       |
| **Documentation & README**      | Clear instructions, examples provided          | Minimal setup guide      | Sparse or unclear guide    | Missing or incomplete      |
| **Bonus Features**              | Includes advanced rules or CLI/UI              | One minor enhancement    | No additional effort       | Lacks initiative           |

**Total Score: /70**

---

# Sentiment Classifier with Custom Rule Engine (No ML)

A lightweight, rule-based sentiment analysis engine built using core data structures and algorithms. No machine learning libraries used. Ideal for learning NLP fundamentals and DSA applications.

---

## 🚀 Features

- Classify text as `Positive`, `Negative`, or `Neutral`
- Pure rule-based sentiment engine
- Handles negations like "not bad"
- CLI support for testing sentences
- Configurable rules via `sentiment.json`

---

## 📦 Project Structure

```
sentiment-rule-engine/
├── sentiment-classifier.js      # Main sentiment engine
├── sentiment.json               # Rule definitions (positive, negative, etc.)
├── sample-tests.txt             # Sample sentences and expected output
└── README.md                    # This file
```

---

## ⚙️ Setup Instructions

1. **Clone the repo:**

```bash
git clone https://github.com/yourusername/sentiment-rule-engine.git
cd sentiment-rule-engine
```

2. **Install Node.js (if not already installed):**

```bash
# On Debian/Ubuntu
sudo apt install nodejs npm

# Or install via Node Version Manager
nvm install node
```

3. **Create/Edit `sentiment.json`:**

```json
{
  "positive": ["good", "great", "happy", "excellent", "amazing"],
  "negative": ["bad", "terrible", "sad", "slow", "poor"],
  "negations": ["not", "never", "no"],
  "intensifiers": ["very", "extremely", "super"]
}
```

4. **Run the CLI tool:**

```bash
node sentiment-classifier.js
```

---

## 💡 CLI Usage Examples

**Example 1:**

```
Enter a sentence: The food was not bad
Output: Positive
```

**Example 2:**

```
Enter a sentence: Service was slow and terrible
Output: Negative
```

**Example 3:**

```
Enter a sentence: It was okay
Output: Neutral
```

---

## 📈 Extendability

You can enhance this system by:

- Adding rule weights for scoring
- Handling conjunctions like "but"
- Introducing basic grammar trees
- Building a web UI or CLI dashboard

---

## 🧠 Learning Objectives

- Implement stacks, arrays, and hash maps
- Learn basic rule engines and NLP preprocessing
- Practice clean coding and performance analysis

---

## 📜 License

MIT License © 2025 Srikanth Dhondi

---

## Happy Learning! 🎓
