## 📌 Capstone Project Assignment

### 🧠 **Project Title:**

**Inventory Risk Analyzer – Rule-Based Demand vs Stock Engine**

---

### 🧾 **Problem Statement:**

Create an intelligent inventory checker that evaluates product stock levels against recent sales trends and predefined supply chain rules. The tool must flag overstock or shortage scenarios without using any predictive models or AI libraries, mimicking smart ERP behavior through deterministic logic.

---

### 📚 **Module Relevance (DSA Concepts):**

- `Hash Tables:` Efficient SKU mapping to real-time and historical stock/sales data
- `Queues:` Sliding window to track recent demand fluctuations
- `Graphs:` Optional dependency trees among bundled products or shared suppliers
- `Heaps:` Fast retrieval of most/least stocked or at-risk SKUs
- `Arrays:` For maintaining time-based stock movement data

---

### 🚫 **Constraints:**

1. No use of machine learning or forecasting libraries.
2. Input data must be accepted in **CSV format** (e.g., `stock.csv`, `sales.csv`).
3. Flag risk levels using **predefined rule thresholds**, not probability scores.
4. Solution must classify each SKU into one of three categories: **Low / Medium / High Risk**.
5. Output must be exportable as a structured report.

---

### 🎯 **Expected Outcome:**

- An inventory analytics tool that:

  - Imports stock and sales history per SKU
  - Applies business rules like:

    - “If current stock < average 3-day sales × buffer factor → High Risk”
    - “If current stock > 2× monthly average sales → Overstock Risk”

  - Classifies inventory per SKU as:

    - ✅ Low Risk
    - ⚠️ Medium Risk
    - ❌ High Risk

  - Generates a report with SKU, category, risk score, and recommendation

---

### 📄 **Sample Rule Engine Scenarios:**

- `< 3-day buffer` → High Risk
- `> 200% of last month’s average sales` → Overstock
- `Zero sales + high inventory` for 2 weeks → Stale Inventory
- `Bundle SKU depends on low-stock child SKU` → Conditional Risk

---

### 📤 **Deliverables:**

- Source code with clear structure and comments
- Rule configuration file (e.g., `rules.json`)
- Sample CSV files (`stock.csv`, `sales.csv`)
- Output: `risk_report.csv` with status, suggestions
- Optional: Simple UI or command-line flags for processing

---

### 📏 **Evaluation Rubric:**

| Criteria                              | Weightage | Description                                       |
| ------------------------------------- | --------- | ------------------------------------------------- |
| ✅ Functional Accuracy                | 30%       | Correctly classifies inventory and applies rules  |
| 📐 DSA Usage                          | 25%       | Efficient use of queues, heaps, hash tables, etc. |
| ⚙️ Rule Flexibility & Modifiability   | 15%       | Custom rules can be added/modified easily         |
| 🖥️ Code Readability & Documentation   | 15%       | Clean, maintainable code with clear explanations  |
| 📊 Output Quality & Report Generation | 10%       | Well-structured, actionable inventory insights    |
| 🎁 Bonus Integration (ERP CSV I/O)    | 5%        | Realistic integration with ERP-style formats      |

---

```
// 📁 inventory-risk-analyzer/
// ├── data/
// │ ├── stock.csv
// │ └── sales.csv
// ├── rules/
// │ └── rules.json
// ├── src/
// │ ├── index.js
// │ ├── loader.js
// │ ├── analyzer.js
// │ └── utils.js
// ├── output/
// │ └── risk_report.csv
// ├── README.md
// └── package.json
```

# 📦 Inventory Risk Analyzer (JS Version)

Analyze inventory risk using sales data and buffer rules. Pure JavaScript, no ML.

## 🚀 How to Run

```bash
npm install
node src/index.js
```

## 📂 File Inputs

- `data/stock.csv` — SKU, Stock
- `data/sales.csv` — SKU, Quantity, Date

## 📄 Output

- `output/risk_report.csv`

## 🔧 Rules

- Defined in `rules/rules.json`

## 📊 Risk Levels

- ✅ Low Risk
- ⚠️ Medium Risk
- ❌ High Risk

---

✅ GitHub starter template for **Inventory Risk Analyzer (JavaScript)** has been created. It includes:

- 📁 File structure with:

  - `src/` code files for logic, loaders, utils
  - `data/` and `output/` directories
  - `rules/` for configurable JSON rules

- 🧠 DSA usage: HashMaps, Arrays, and sliding window logic (Queues)
- 📄 `README.md` with usage instructions
- 📤 CSV I/O integration simulating ERP behavior
