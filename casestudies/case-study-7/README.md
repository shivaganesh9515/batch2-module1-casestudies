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
