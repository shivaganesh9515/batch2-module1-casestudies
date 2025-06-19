## 🧠 **Capstone Project 5: Smart Shopping Cart Optimizer (Rule-Based Recommender)**

### 📌 **Problem Statement**

Design a **rule-based cart optimizer** that suggests complementary products (e.g., frequently bought together) in a local/offline e-commerce setting. The system simulates an intelligent recommendation engine **without using any ML or paid AI APIs**, relying purely on **data structures and heuristics**.

---

### 📋 **Constraints**

- No usage of ML algorithms, embeddings, or pretrained models
- Should operate **offline**, without any internet or cloud dependencies
- Must use only data structures covered in the **DSA module**
- Simulate co-occurrence from **static product datasets or manual logic**
- Optimizer should **not interrupt checkout**, just suggest seamlessly

---

### 🧮 **Technical Scope / DSA Concepts**

| Concept            | Application                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| **Hash Maps**      | Store and retrieve product co-occurrence data (e.g., milk → bread)       |
| **Graphs**         | Model item-item connections for bundle discovery and related products    |
| **Queues**         | Maintain suggestion priority and flow based on cart state                |
| **Trees**          | Categorize and cluster products hierarchically (e.g., Groceries → Dairy) |
| **Arrays / Lists** | Store and parse user cart items for quick analysis                       |

---

### ✅ **Expected Outcome**

- A CLI or GUI tool that:

  - Takes a shopping cart (list of selected items)
  - Recommends related/complementary products
  - Ranks suggestions based on relevance or past patterns

- Sample interaction:

  ```
  Cart: [milk, eggs]
  Suggestions: [bread (bundle offer), butter (popular combo)]
  ```

- Logic should be transparent and rule-driven
- Optional: Handle **bundle discounts** or "You may also like…" style output

---

### 📊 **Rubric (Evaluation Criteria)**

| Criteria                                  | Weight | Description                                                            |
| ----------------------------------------- | ------ | ---------------------------------------------------------------------- |
| **Correctness**                           | 30%    | Cart suggestion engine functions properly with valid inputs            |
| **DSA Application**                       | 25%    | Use of graphs, hash maps, queues, and trees effectively                |
| **Efficiency & Time Complexity Analysis** | 10%    | Comments explain design choices; system scales well for larger carts   |
| **Code Structure & Modularity**           | 10%    | Clean code organization and logical separation of responsibilities     |
| **Innovation / Bonus Features**           | 10%    | Bundle discount handling, seasonal logic, customizable rules           |
| **UI/UX or CLI Usability**                | 10%    | Clear interface for adding/removing cart items and viewing suggestions |
| **Documentation & Reporting**             | 5%     | Project report, code documentation, and dataset explanation included   |

---

````js
# 🧠 Smart Shopping Cart Optimizer – Rule-Based Recommender

A rule-based cart optimization engine that recommends complementary or bundled products in an offline e-commerce setup. This simulator uses traditional data structures and heuristics — not machine learning — to suggest items commonly bought together.

---

## 🛠️ Features

- CLI tool for cart input and live suggestions
- Rule-driven co-occurrence logic (no ML)
- Offline operation using local product mappings
- Priority-based recommendations
- Transparent suggestion engine for learning/demo use

---

## 📁 Project Structure

```bash
cart-optimizer-simulator/
├── data/
│   ├── products.json             # List of all products
│   └── co_occurrence_rules.json # Rule definitions for product bundling
├── src/
│   ├── cart.js                  # Cart input and validation
│   ├── recommender.js          # Suggestion engine logic
│   └── utils.js                # Helpers (lookup, sorting, etc.)
├── main.js                     # CLI entry point
└── README.md
````

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/cart-optimizer-simulator.git
cd cart-optimizer-simulator
```

### 2. Install dependencies (if any)

```bash
npm install
```

### 3. Prepare Data Files

- `data/products.json` — Product catalog
- `data/co_occurrence_rules.json` — Manual mapping of commonly paired products

### 4. Run the simulator

```bash
node main.js
```

---

## 📚 Rule Definitions (data/co_occurrence_rules.json)

Example:

```json
{
  "milk": ["bread", "butter"],
  "eggs": ["bacon", "cheese"],
  "toothbrush": ["toothpaste"]
}
```

> If a cart contains `milk`, system will suggest `bread` and `butter`.

---

## 💻 CLI Usage

### Input Example

```bash
node main.js milk eggs
```

### Output

```
Cart: [milk, eggs]
Suggestions:
- bread (from milk)
- butter (from milk)
- bacon (from eggs)
- cheese (from eggs)
```

---

## ✅ Future Improvements

- Implement graph-based scoring (product nodes)
- Add seasonal/context-based recommendation modifiers
- Enable dynamic bundle discounts

---

## 🧠 DSA Mappings

| Concept      | Role                                                 |
| ------------ | ---------------------------------------------------- |
| Hash Map     | Co-occurrence and product lookup                     |
| Graphs       | Optional extension to model strong associations      |
| Queues       | Maintain recommendation priority per cart session    |
| Trees        | Hierarchical product categories (e.g., Dairy > Milk) |
| Arrays/Lists | Current cart, history tracking                       |

---

## 👤 Author

Srikanth Dhondi – [LinkedIn](https://www.linkedin.com/in/srikanthdhondi)

---

## 🧾 License

MIT License – For educational/demo use only.

# 🛒 Smart Shopping Cart Optimizer – Rule-Based CLI Recommender

A data-structure-driven simulator that takes a list of items in a shopping cart and suggests complementary products using only rule-based logic—no machine learning, no APIs. Designed for offline use in local retail/e-commerce settings.

---

## 🛠️ Features

- CLI-based cart optimizer
- Rule-based product suggestion engine
- Offline, no API or model dependencies
- Uses DSA principles: Hash Maps, Graphs, Queues, Trees
- Easy to extend with custom logic

---

## 📁 Project Structure

```bash
cart-optimizer-simulator/
├── data/
│   ├── products.json             # Product catalog
│   └── co_occurrence_rules.json # Rule-based suggestion mappings
├── src/
│   ├── parser.js                # Reads product and rule data
│   ├── cart.js                  # CLI cart manager
│   ├── recommender.js          # Suggestion engine using rules
│   └── utils.js                # Helper functions
└── main.js                     # Entry point CLI
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/cart-optimizer-simulator.git
cd cart-optimizer-simulator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Prepare data

- Add your products to `data/products.json`
- Define rules in `data/co_occurrence_rules.json`

### 4. Run the simulator

```bash
node main.js
```

---

## 🎯 Scoring & Suggestion Rules (co_occurrence_rules.json)

Example structure:

```json
{
  "milk": [
    { "item": "bread", "reason": "frequently bought together", "score": 20 },
    { "item": "butter", "reason": "combo deal", "score": 15 }
  ],
  "eggs": [{ "item": "bacon", "reason": "breakfast combo", "score": 25 }]
}
```

You may assign weights based on historical patterns, business logic, or bundle discounts.

---

## 💻 CLI Usage

### Basic run

```bash
node main.js
```

### Output

```bash
Cart: ["milk", "eggs"]
Suggestions:
 - bread (frequently bought together)
 - butter (combo deal)
 - bacon (breakfast combo)
```

---

## ✅ To-Do (Stretch Goals)

- Handle seasonal rule sets
- Add CLI input via flags (e.g., `--cart milk,eggs`)
- Visual suggestion flow via Ink
- GUI with drag-and-drop cart simulation

---

## 🧠 DSA Mappings

| Concept    | Application                                       |
| ---------- | ------------------------------------------------- |
| Hash Map   | Map products to suggestions quickly               |
| Graph      | Build co-occurrence networks for bundle discovery |
| Queue      | Maintain suggestion priority                      |
| Tree       | Hierarchical product categorization               |
| Array/List | Represent user cart and result suggestions        |

---
