## 🕵️‍♂️ **Capstone Project 6: Fraud Detection Simulator (Rule-Based Transaction Validator)**

---

### 📌 **Problem Statement**

Build a **rule-based transaction validation simulator** that analyzes batches of e-commerce transactions to flag suspicious or potentially fraudulent activity — entirely without machine learning. The solution should use traditional data structures and sliding window logic to emulate AI-like detection.

---

### 📋 **Constraints**

- ❌ No use of ML models, statistical learning, or third-party fraud APIs
- ✅ Must run completely offline and support batch processing
- ✅ Should include **at least 3 heuristic rules** for fraud detection
- ✅ System should output flagged transactions with reason codes
- 💡 Use simulated transaction data (CSV/JSON or hardcoded sets)

---

### 🧮 **Technical Scope / DSA Concepts**

| DSA Concept                 | Use Case                                                                               |
| --------------------------- | -------------------------------------------------------------------------------------- |
| **Hash Tables**             | Store user profiles and enable fast transaction/user lookups                           |
| **Queues (Sliding Window)** | Detect rapid sequences of events (e.g., 5 payments in 2 minutes)                       |
| **Stacks**                  | Backtrack recent user activity for pattern recognition (e.g., login stack)             |
| **Graphs (Optional)**       | Map device/IP/user connections to find shared vectors (e.g., same IP → multiple users) |
| **Arrays / Lists**          | Store transaction data and log patterns                                                |

---

### ✅ **Expected Outcome**

A CLI or local UI tool that:

- Accepts a batch of simulated transactions
- Flags suspicious transactions based on static rules such as:

  - High volume within short duration (frequency abuse)
  - Mismatched billing/shipping locations
  - Cart total exceeding user’s historical norm
  - Repeated failures before success (login/payment abuse)

- Produces a report with:

  - Transaction ID
  - User ID
  - Flagged Reason(s)
  - Risk Score (rule-weighted, optional)

---

### 📊 **Rubric (Evaluation Criteria)**

| Criteria                                | Weight | Description                                                            |
| --------------------------------------- | ------ | ---------------------------------------------------------------------- |
| **Functional Accuracy**                 | 30%    | Detects fraud scenarios as per heuristic logic                         |
| **Effective Use of DSA**                | 25%    | Implements at least 3 key structures (queues, hash maps, stacks, etc.) |
| **Time/Space Complexity Optimization**  | 10%    | Handles larger batches efficiently; includes basic performance metrics |
| **Code Design & Modularity**            | 10%    | Well-structured, reusable functions or modules                         |
| **Rule Engine Flexibility**             | 10%    | Easy to update or add new fraud detection rules                        |
| **User Experience / Reporting Clarity** | 10%    | Clear CLI/GUI and outputs with reasons for flags                       |
| **Documentation**                       | 5%     | README, usage guide, example inputs/outputs included                   |

---

## Would you like me to compile all **three capstone templates into a printable/markdown-ready format** or create a Notion-compatible export as well?

Your GitHub starter template for **Capstone Project 3: Fraud Detection Simulator** is ready. Here's what's included:

### ✅ Structure Overview

```bash
fraud-detection-simulator/
├── data/
│   └── transactions.json       # Simulated input transactions
├── reports/
│   └── fraud_report.csv        # Auto-generated fraud detection report
├── src/
│   ├── parser.js               # Loads and parses input data
│   ├── engine.js               # Runs the rule engine
│   ├── rules.js                # Heuristic rules implemented here
│   └── exporter.js             # Exports results to CSV
└── main.js                     # Entry point CLI
```

### 🛠️ Core Rules Implemented

1. **Sliding Window Check** — Detects frequency abuse using a 2-minute window
2. **Location Mismatch** — Flags mismatched billing vs. shipping addresses
3. **Cart Value Anomaly** — Detects unusually large purchases compared to user history

### 🚀 To Run the Project

1. Ensure Node.js is installed
2. Place sample transactions in `data/transactions.json`
3. Execute the CLI:

```bash
node main.js
```

The result will be saved to `reports/fraud_report.csv`.

---

````JS
# 🕵️‍♂️ Fraud Detection Simulator – Rule-Based Transaction Validator

A rule-driven simulator that processes batches of e-commerce transactions to flag suspicious or potentially fraudulent activity without any machine learning. Built with traditional data structures and JavaScript CLI.

---

## 🛠️ Features

- CLI interface for batch fraud detection
- Rule-based engine with configurable heuristics
- Offline processing (JSON input)
- Clear CSV report with flagged transactions and reason codes
- Uses core DSA principles: Hash Maps, Queues, Stacks

---

## 📁 Project Structure

```bash
fraud-detection-simulator/
├── data/
│   └── transactions.json       # Simulated transaction dataset
├── reports/
│   └── fraud_report.csv        # Output report of flagged transactions
├── src/
│   ├── parser.js               # Loads transaction data
│   ├── engine.js               # Main fraud detection engine
│   ├── rules.js                # Set of fraud rules
│   └── exporter.js             # CSV report generator
└── main.js                     # Entry point CLI
````

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/fraud-detection-simulator.git
cd fraud-detection-simulator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Prepare input file

- Place transaction data in `data/transactions.json`

### 4. Run the simulator

```bash
node main.js
```

---

## 📚 Fraud Detection Rules (src/rules.js)

### Sample Heuristics:

```javascript
{
  frequencyAbuse: {
    maxTransactions: 5,
    timeWindowMinutes: 2,
    weight: 30
  },
  locationMismatch: {
    enabled: true,
    weight: 20
  },
  cartAnomaly: {
    deviationMultiplier: 2.5,
    weight: 25
  }
}
```

> You can adjust rule parameters in `rules.js` or define a separate JSON config.

---

## 💻 CLI Usage

### Basic run

```bash
node main.js
```

### Output

- File generated: `reports/fraud_report.csv`
- Columns include: `Transaction ID`, `User ID`, `Flagged Reason(s)`, `Risk Score`

---

## 🧪 Sample Input File

### `data/transactions.json`

```json
[
  {
    "id": "tx001",
    "userId": "u1001",
    "timestamp": "2025-06-18T14:00:00Z",
    "amount": 500,
    "billingLocation": "New York",
    "shippingLocation": "California",
    "status": "SUCCESS"
  },
  {
    "id": "tx002",
    "userId": "u1001",
    "timestamp": "2025-06-18T14:01:00Z",
    "amount": 520,
    "billingLocation": "New York",
    "shippingLocation": "New York",
    "status": "FAILED"
  }
  // more transactions
]
```

---

## ✅ To-Do (Stretch Goals)

- Add historical user profiling
- Create GUI using React or Ink
- Allow external rules config in JSON

---

## 🧠 DSA Mappings

| Concept          | Application                                      |
| ---------------- | ------------------------------------------------ |
| Hash Map         | Fast user/transaction lookup                     |
| Queue            | Sliding window logic for frequency detection     |
| Stack            | Track login/payment backtracking behavior        |
| Arrays           | Store and sort user transactions chronologically |
| Graph (optional) | Map shared IP/device/user relationships          |

---

## 🧾 License

MIT License – for educational/demo use.

---

## 👤 Author

Srikanth Dhondi – [LinkedIn](https://www.linkedin.com/in/srikanthdhondi)
