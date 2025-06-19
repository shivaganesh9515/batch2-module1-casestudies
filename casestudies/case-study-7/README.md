## 📌 Capstone Project Assignment

### 🧠 **Project Title:**

**Lead Prioritization Engine – Rule-Based CRM Scoring System**

---

### 🧾 **Problem Statement:**

Design and develop a lead scoring engine for a B2B CRM system that ranks incoming leads based on predefined business rules and engagement data. The system will prioritize leads using non-ML rule logic, simulating intelligent sales targeting and prioritization.

---

### 📚 **Module Relevance (DSA Concepts):**

- `Hash Maps:` Store metadata like role, company size, last interaction
- `Priority Queues:` Dynamic ranking of leads based on cumulative score
- `Linked Lists:` Track user engagement activities over time
- `Trees:` Represent company hierarchy (parent-child accounts)
- `Arrays:` Maintain time-series of user actions (clicks, logins, etc.)

---

### 🚫 **Constraints:**

1. Must operate **offline** – no third-party CRM integrations.
2. Must use **rule-based logic only** (no ML models or paid APIs).
3. Input data must be accepted from local `.csv` or `.json` files.
4. At least **5 different scoring rules** must be implemented.
5. Must support **export of top 10 prioritized leads** to a report.

---

### 🎯 **Expected Outcome:**

- A working CLI or minimal GUI tool that:

  - Parses a list of leads and engagement events.
  - Scores and ranks leads based on business rules.
  - Exports ranked list to CSV (Name, Score, Priority Tag).

- Lead scoring decisions should be explainable and rule-driven.
- Clear data structures must be visible in implementation.

---

### 🧮 **Sample Scoring Rules:**

- +20 if Job Title = “CXO” or “VP”
- +10 if Company Size > 1000
- +5 for each email opened in last 7 days
- -10 if no activity in last 30 days
- +15 if they visited pricing page twice in a week

---

### 📤 **Deliverables:**

- Source Code (with README)
- Sample input/output files
- Report explaining rules used and DSA mapping
- Optional: Demo video (2–3 mins)

---

### 📏 **Evaluation Rubric:**

| Criteria                            | Weightage | Description                                                 |
| ----------------------------------- | --------- | ----------------------------------------------------------- |
| ✅ Functionality                    | 30%       | Lead ranking based on rules is accurate and usable          |
| 📐 DSA Application                  | 25%       | Appropriate use of data structures (hash map, queues, etc.) |
| 💡 Rule Complexity & Creativity     | 15%       | Thoughtful business logic and use-case simulation           |
| 🖥️ Code Quality & Documentation     | 15%       | Readability, comments, and README clarity                   |
| 📊 Output Reporting                 | 10%       | Quality of ranked output (export)                           |
| 🎁 Bonus Features (Hierarchy, Undo) | 5%        | Extra features like company trees or manual override        |

---

```
// 📁 Directory Structure
// lead-prioritization-engine/
// ├── data/
// │   ├── leads.csv
// │   └── interactions.json
// ├── output/
// │   └── top_leads.csv
// ├── rules/
// │   └── scoring_rules.json
// ├── src/
// │   ├── index.js
// │   ├── scorer.js
// │   ├── utils.js
// │   └── exporter.js
// ├── package.json
// └── README.md
```

---

# 🧠 Lead Prioritization Engine

**Rule-Based Scoring System for CRM Intelligence (Built with JavaScript + DSA Principles)**

> A highly configurable, offline-capable lead scoring engine designed for enterprise sales teams, data engineers, and product managers who need deterministic, auditable logic — without relying on black-box ML models or cloud APIs.

---

## 🏆 Key Benefits

- **Fully Offline**: Works entirely on local data — ideal for secure, on-premise, or air-gapped environments.
- **Explainable Scoring**: Transparent, rule-driven lead scoring with human-readable reasoning.
- **Customizable Logic**: Scoring rules editable via JSON – align with your evolving business priorities.
- **Blazingly Fast**: Built using optimized DSA concepts (HashMaps, Heaps, Trees) for real-time use cases.
- **Enterprise-Ready**: Perfect for internal ops tools, lead routing engines, or as a microservice within CRMs.

---

## 🛠️ Features

- 🧮 CLI tool to score leads and export prioritized reports
- 🔒 Works entirely with CSV/JSON – no external API or internet required
- ⚙️ Scoring logic is externalized in `rules/scoring_rules.json`
- 📊 Generates human-readable CSV reports with scores + explanations
- 🧠 Implements core CS concepts: Hashing, Priority Queues, Trees, Sorting

---

## 🧱 Project Structure

```bash
lead-prioritization-engine/
├── data/                  # Input CRM and activity files
│   ├── leads.csv
│   └── interactions.json
│
├── reports/               # Output: scored leads
│   └── prioritized_leads.csv
│
├── rules/
│   └── scoring_rules.json
│
├── src/                   # Core engine logic
│   ├── main.js            # Entry point
│   ├── parser.js          # Data ingestion logic
│   ├── scorer.js          # Rule engine + score logic
│   └── exporter.js        # CSV report writer
│
└── README.md
```

---

## ⚙️ Quick Start (CLI Mode)

### 1. Install

```bash
git clone https://github.com/yourusername/lead-prioritization-engine.git
cd lead-prioritization-engine
npm install
```

### 2. Prepare Input Files

- `data/leads.csv`: Lead master data
- `data/interactions.json`: User activities/behavior
- `rules/scoring_rules.json`: Define your business-specific weights

### 3. Run the Engine

```bash
node src/main.js
```

### 4. Output

- Scored leads exported to: `reports/prioritized_leads.csv`

---

## 📚 Rule Definition Format (`rules/scoring_rules.json`)

```json
{
  "jobTitleWeight": {
    "CXO": 20,
    "VP": 20
  },
  "companySizeWeight": {
    ">1000": 10
  },
  "emailOpenWeight": 5,
  "noActivityPenalty": -10,
  "pricingPageVisitBonus": 15
}
```

> 🎯 Business teams can tune scoring logic without touching any code.

---

## 📥 Sample Input: `leads.csv`

```csv
id,name,jobTitle,companySize
1,Alice Brown,CXO,1500
2,John Smith,Manager,1200
3,Sarah Jones,VP,800
4,Raj Patel,Director,5000
5,Linda Yang,VP,1100
```

## 📥 Sample Input: `interactions.json`

```json
{
  "1": {
    "emailsOpened": 3,
    "pricingPageVisits": 2,
    "lastActiveDaysAgo": 5
  },
  "2": {
    "emailsOpened": 1,
    "pricingPageVisits": 0,
    "lastActiveDaysAgo": 10
  },
  "3": {
    "emailsOpened": 0,
    "pricingPageVisits": 0,
    "lastActiveDaysAgo": 31
  }
}
```

---

## 📤 Sample Output: `prioritized_leads.csv`

```csv
Name, Score, Priority, Reasoning
Alice Brown, 75, HIGH, "CXO, opened 3 emails, visited pricing"
John Smith, 40, MEDIUM, "Company size >1000, 1 email"
Sarah Jones, 10, LOW, "No activity in 30 days"
```

---

## 🧠 DSA Principles Applied

| Concept          | Purpose                                      |
| ---------------- | -------------------------------------------- |
| Hash Map         | Fast data lookup by ID (lead + interactions) |
| Priority Queue   | Rank top leads efficiently                   |
| Arrays           | Store and iterate over time-based activities |
| Trees (Optional) | Company hierarchy scoring                    |

---

## 🧪 Ideal Use Cases

- 🚀 Internal sales tools for SDRs/BDRs
- 📈 Lead routing/assignment systems
- 🔍 Enrichment + prioritization batch jobs
- 🧾 CRM data pipelines (ETL with scoring)
- 🔐 Environments where ML models are not allowed

---

## 📌 To-Do & Stretch Goals

- [ ] Terminal GUI using `Ink` / React CLI
- [ ] Web-based Rule Editor UI
- [ ] Company Hierarchy Tree Viewer (OrgTree)

---

## 🧾 License

MIT License – For enterprise prototyping and internal CRM enhancements.

---

## 👤 Author

**Srikanth Dhondi**
Senior Software Engineer | AI & CRM Systems Specialist
🔗 [LinkedIn](https://www.linkedin.com/in/srikanthdhondi)

---
