---

## 🧠 Capstone Project Assignment 

### 📌 Project Title:

**Intelligent Auto-Suggestion System (Offline Search Recommender)**

---

### 📝 Problem Statement:

Design and implement an **offline word/phrase auto-suggestion system** similar to those used in search engines, IDEs, or form fields. The system should efficiently return the top relevant suggestions based on partial user input, using only core **Data Structures and Algorithms (DSA)** without any AI or ML models.

---

### 🎯 Learning Objectives:

- Apply **Tries** to implement efficient prefix-based lookups.
- Use **Hash Maps** to track and store word frequencies.
- Implement **Priority Queues/Heaps** to rank and retrieve top suggestions.
- Analyze and optimize the system’s **Time and Space Complexity**.
- Simulate AI-like behavior using only structured algorithmic logic.

---

### 📦 Deliverables:

1. Source code (preferably in Python, Java, or JavaScript)
2. README file with setup instructions and usage examples
3. Demo video or screenshots (optional but encouraged)
4. Technical documentation including:

   - Data structures used and why
   - Time and space complexity analysis
   - Sample inputs/outputs

5. Test cases (minimum 5) covering valid, edge, and invalid inputs

---

### 📐 Constraints:

- **No external NLP or AI/ML libraries** (like OpenAI, spaCy, TensorFlow, etc.)
- Input dictionary must be **loaded locally from a text file** (can be 500–1,000 words)
- Suggestions should be returned in **≤ 100 ms** for queries of length ≥ 3 characters
- Must implement **Trie** for prefix search functionality
- Return suggestions in **ranked order** based on frequency of usage (tracked using hash maps)
- Handle **case-insensitivity**, punctuation stripping, and empty input gracefully

---

### 📊 Expected Outcomes:

- Given an input like `app`, the system should return results such as:
  `["apple", "application", "appetite", "apply"]` – ranked by usage frequency.
- Efficient performance on large dictionaries (≥ 1,000 words)
- Clean and modular code with good separation of concerns (Trie logic, frequency tracking, etc.)

---

### 📈 Bonus Objectives (Optional):

- Implement **undo** functionality using **Stacks**
- Support **bigram suggestions** (e.g., "machine l" → "machine learning") using custom word-pair hashing
- Provide a **CLI or web interface** for testing

---

# 🧠 Intelligent Auto-Suggestion System (Offline Search Recommender)

## 🚀 Overview

This project implements an **offline word/phrase auto-suggestion system** similar to those in search engines, IDEs, and form fields. It uses only core **Data Structures and Algorithms** (no AI/ML) to provide real-time suggestions from a locally loaded dictionary.

## 🧰 Features

- Fast auto-completion using **Trie (Prefix Tree)**
- Suggestions ranked by **word usage frequency** (via Hash Map)
- Efficient top-k retrieval using a **Max Heap/Priority Queue**
- Fully **offline capable**
- Case-insensitive and punctuation-tolerant

## 🛠️ Setup Instructions

### Prerequisites:

- Node.js (v14+ recommended)

### Installation:

```bash
# Clone the repository
$ git clone https://github.com/yourusername/intelligent-auto-suggester.git
$ cd intelligent-auto-suggester

# Install dependencies (if needed)
$ npm install

# Add dictionary data (each line as `word frequency`)
$ echo -e "apple 30\napplication 15\napplejack 5\nappletree 20" > data/dictionary.txt
```

## 📌 Usage

### Run the CLI Auto-Suggester

```bash
$ node index.js
```

You will be prompted to enter partial input. Example:

```
> Enter prefix: app
Suggestions:
1. apple (30)
2. appletree (20)
3. application (15)
4. applejack (5)
```

## 📦 Project Structure

```
intelligent-auto-suggester/
├── index.js                 # Core Trie and CLI logic
├── data/
│   └── dictionary.txt       # Input words + frequency file
├── test/
│   └── test.js              # Unit test cases
├── README.md                # Documentation
└── package.json             # Project config
```

## 🎯 Scoring Rubric (For Evaluation / Hackathon Submission)

| Criteria                        | Excellent (10)                             | Good (7)                       | Fair (4)                            | Poor (1)                   |
| ------------------------------- | ------------------------------------------ | ------------------------------ | ----------------------------------- | -------------------------- |
| **Correctness & Functionality** | Fully functional, meets all requirements   | Minor bugs, meets most specs   | Partially works, missing features   | Doesn't work or crashes    |
| **DSA Application**             | Uses Trie, HashMap, and PQ efficiently     | Minor issues in DSA choice     | Inefficient or incorrect structures | No relevant DSA usage      |
| **Code Quality & Structure**    | Clean, modular, well-commented             | Understandable but not modular | Poor structure, lacks clarity       | Unreadable or messy code   |
| **Efficiency & Performance**    | Fast, handles large input well             | Acceptable performance         | Sluggish or unoptimized             | Very slow, crashes on load |
| **Documentation & README**      | Excellent clarity, well explained          | Sufficient details             | Sparse documentation                | Missing or very poor       |
| **Creativity / Bonus Features** | Includes optional features with innovation | Attempts extra feature         | No additional effort                | Lacks initiative           |

**Total Score: /60**

## ✅ Example Dictionary (Top 10 Words)

```
apple 30
application 15
apply 10
appetite 5
applicant 8
banana 12
book 20
bookmark 7
builder 4
build 13
```

## 🧪 Running Tests

```bash
$ node test/test.js
```

## 📬 Contributions

Pull requests are welcome! Please submit meaningful suggestions, new features, and test cases.

## 📄 License

MIT License. Feel free to use and modify.

---
