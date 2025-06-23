## 📘 Sentiment Classifier with Custom Rule Engine (No ML)

### 📌 Project Title:

**Sentiment Classifier with Custom Rule Engine (Offline NLP – No ML)**

---

### 📝 Problem Statement:

Design and implement a **rule-based sentiment analysis system** that classifies a given sentence as **Positive**, **Negative**, or **Neutral**. The system simulates intelligent natural language processing using only core **Data Structures and Algorithms (DSA)** — without using any machine learning models or libraries.

---

### 🎯 Learning Objectives:

- Understand and implement **Hash Tables** for storing word dictionaries.
- Use **Stacks** to track sentiment flips due to negations (e.g., “not bad”).
- Apply **Arrays** for sentence tokenization and word analysis.
- Build a basic **rule engine** using conditional logic and DSA.
- Optimize logic with time/space complexity awareness.

---

### 📦 Deliverables:

1. Source code (`sentiment-classifier.js`)
2. A `sentiment.json` file with rule definitions
3. A `sample-tests.txt` with example input/output pairs
4. README file with all details
5. Optional: CLI interaction

---

### 📐 Constraints:

- Use only a **predefined list** of positive, negative, and negation words.
- No external ML/NLP libraries.
- Handle:
  - **Negations** (e.g., “not good” → Negative)
  - **Simple punctuation** and **case insensitivity**
- Must print: `Positive`, `Negative`, or `Neutral`

---

### 📊 Expected Outcomes:

- Input: `"The food was not bad"` → Output: `Positive`
- Input: `"Service was slow and terrible"` → Output: `Negative`
- Input: `"It was okay"` → Output: `Neutral`

---

### 🚀 Bonus Objectives (Optional):

- Score-based sentiment output (e.g., `Score: +2 → Positive`)
- Handle `but` as sentiment flip
- Support intensifiers like `very`, `extremely` (affect weight)

---

### 📈 Evaluation Rubric:

| Criteria                        | Excellent (10)                                 | Good (7)                 | Fair (4)                   | Poor (1)                   |
| ------------------------------- | ---------------------------------------------- | ------------------------ | -------------------------- | -------------------------- |
| **Correctness**                 | All rules applied correctly                    | Minor bugs               | Partial logic              | Wrong or no output         |
| **DSA Usage**                   | Effective use of arrays, stacks, hash maps     | Average use              | Minimal application        | Poor or wrong use          |
| **Rule Logic**                  | Robust and clear logic                         | Basic conditions         | Weak rules                 | No logical rules           |
| **Code Quality**                | Clean, modular, readable                       | Acceptable               | Messy                      | Hard to read/understand    |
| **Efficiency**                  | Fast for up to 100 words                       | Average speed            | Sluggish                   | Very slow                  |
| **Documentation**              | Complete README with examples                  | Basic usage shown        | Few instructions           | Missing or unclear         |

---

## 🚀 Features

- Detects positive, negative, neutral sentiment
- Supports negations like “not good”
- CLI-based interactive tool
- Easy to extend with new words/rules

---

## 📦 Project Structure

```

sentiment-rule-engine/
├── sentiment-classifier.js
├── sentiment.json
├── sample-tests.txt
└── README.md

````

---

## ⚙️ Setup Instructions

1. Clone the folder or copy the files

2. Ensure Node.js is installed:

```bash
node -v
````

3. Run the classifier:

```bash
node sentiment-classifier.js
```

---

## 💡 Sample CLI Usage

```
Enter a sentence: The food was not bad
🧾 Words: [ 'the', 'food', 'was', 'not', 'bad' ]
📣 Sentiment: Positive
```

```
Enter a sentence: The service was poor and slow
🧾 Words: [ 'the', 'service', 'was', 'poor', 'and', 'slow' ]
📣 Sentiment: Negative
```

---

## 🧪 Sample Test Cases (`sample-tests.txt`)

```
The food was not bad => Positive
Service was slow and terrible => Negative
It was okay => Neutral
The experience was very good => Positive
The product is not good => Negative
The movie was not great => Negative
The day was amazing => Positive
It is not terrible => Positive
I never liked the service => Negative
The UI was simple but the UX was horrible => Negative
```

---

