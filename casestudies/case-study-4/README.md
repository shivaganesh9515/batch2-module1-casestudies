## 🧠 Capstone Project 4: Intelligent Product Search Engine (Offline Ranked Search)\*\*

### 📌 **Problem Statement**

Design and develop an **offline search engine** for an e-commerce platform that allows users to search for products by keywords. The system should **rank results** based on relevance using frequency and keyword-matching rules. The focus is on mimicking AI-driven search suggestions and relevance ranking **without using ML or paid APIs**.

---

### 📋 **Constraints**

- Must work **entirely offline**
- Cannot use any ML libraries or external AI tools
- Must use **data structures taught in DSA module**
- Support **partial keyword matches** and **synonym recognition**
- Should be efficient in both **lookup** and **ranking**
- Optional Bonus: Implement **spelling correction** using Levenshtein Distance

---

### 🧮 **Technical Scope / DSA Concepts**

| Concept                        | Application                                           |
| ------------------------------ | ----------------------------------------------------- |
| **Tries**                      | Fast prefix lookups for search terms                  |
| **Inverted Index / Hash Maps** | Index products by keywords and store frequencies      |
| **Priority Queues (Heaps)**    | Rank top-N relevant product results by matching score |
| **Arrays / Linked Lists**      | Tokenize queries and store product metadata           |
| **Sets / Dictionaries**        | Synonym mapping, stop-word filtering                  |

---

### ✅ **Expected Outcome**

- Functional offline search engine CLI or GUI
- Given a query like `"wireless mouse"`, return top 5 product results ranked by relevance
- Handle:

  - Prefix matches (e.g., "wire" → "wireless")
  - Keyword weighting (e.g., “gaming” in “gaming mouse” should boost relevance)
  - Basic synonym mapping (e.g., "TV" ≈ "television")

- Results should be displayed with product name, category, and relevance score
- Code should be modular and well-commented

---

### 📊 **Rubric (Evaluation Criteria)**

| Criteria                                  | Weight | Description                                                           |
| ----------------------------------------- | ------ | --------------------------------------------------------------------- |
| **Correctness**                           | 30%    | Functional search engine that returns relevant, ranked results        |
| **DSA Application**                       | 25%    | Effective use of tries, hash maps, heaps, etc.                        |
| **Efficiency & Time Complexity Analysis** | 10%    | Code includes time/space complexity comments and performs efficiently |
| **Code Structure & Modularity**           | 10%    | Organized code, reusable functions, separation of concerns            |
| **Innovation / Bonus Features**           | 10%    | Synonym handling, spelling correction, prefix/suffix enhancements     |
| **UI/UX or CLI Usability**                | 10%    | Clean CLI or GUI that clearly shows results and scores                |
| **Documentation & Reporting**             | 5%     | ReadMe, usage instructions, code comments, and project report         |

---

### 📁 **Proposed Folder Structure**

```
intelligent-product-search-engine/
├── data/
│   ├── products.json            # Product catalog
│   └── synonyms.json            # Synonym mapping
├── src/
│   ├── trie.js                  # Trie implementation for prefix matching
│   ├── index_builder.js         # Builds inverted index from products
│   ├── search_engine.js         # Core ranked search logic
│   ├── synonyms.js              # Synonym loader and lookup
│   ├── spelling.js              # (Optional) Levenshtein-based corrector
│   └── utils.js                 # Tokenizer, stop-word filter, etc.
├── main.js                      # CLI entry point
├── README.md
└── package.json
```

---

### 📝 **README.md Template**

````markdown
# 🔍 Intelligent Product Search Engine (Offline Ranked Search)

Offline, rule-based product search engine for e-commerce applications using pure DSA concepts. No ML, no external APIs — just structured data, smart indexing, and ranked relevance logic.

---

## 📌 Problem Statement

Build a command-line-based offline product search system that supports:

- Partial keyword matches
- Relevance-based ranking using frequency, keyword weightage
- Basic synonym recognition (e.g., "TV" ≈ "television")
- Optional: spelling correction using Levenshtein Distance

---

## 🧠 Core Concepts Used

| Data Structure               | Usage                                            |
| ---------------------------- | ------------------------------------------------ |
| **Trie**                     | Fast prefix-based search                         |
| **Inverted Index (HashMap)** | Keyword to product mapping and frequency scoring |
| **Priority Queue (Heap)**    | Rank top-N results based on score                |
| **Sets / Dictionaries**      | Synonym lookup, stop-word filtering              |
| **Arrays / Linked Lists**    | Query parsing, result aggregation                |

---

## 📁 Folder Structure

```bash
intelligent-product-search-engine/
├── data/
│   ├── products.json
│   └── synonyms.json
├── src/
│   ├── trie.js
│   ├── index_builder.js
│   ├── search_engine.js
│   ├── synonyms.js
│   ├── spelling.js
│   └── utils.js
├── main.js
└── README.md
```
````

---

## ⚙️ Setup Instructions

### 1. Clone and install

```bash
git clone https://github.com/yourusername/intelligent-product-search-engine.git
cd intelligent-product-search-engine
npm install
```

### 2. Add product data

Edit `data/products.json` to include sample product entries:

```json
[
  {
    "name": "Wireless Mouse",
    "category": "Electronics",
    "keywords": ["wireless", "mouse", "usb", "gaming"]
  },
  {
    "name": "Smart TV 42in",
    "category": "Electronics",
    "keywords": ["tv", "smart", "television", "led"]
  }
]
```

### 3. Add synonym mappings

```json
{
  "tv": ["television", "led", "smart tv"],
  "mouse": ["pointer", "trackpad"]
}
```

### 4. Run CLI search

```bash
node main.js
```

Then type your query (e.g., `gaming mouse`) and get ranked results.

---

## 🧮 Scoring Logic

Each product's relevance score is calculated by:

- **Exact keyword matches**: +10 points
- **Partial prefix matches**: +6 points
- **Synonym matches**: +4 points
- **Keyword frequency in product**: weight × frequency
- **(Optional)** Levenshtein score adjustment for typos

---

## 📊 Rubric Mapping

| Criteria           | Description                                 |
| ------------------ | ------------------------------------------- |
| ✅ Correctness     | Functional and relevant ranked results      |
| 🧠 DSA Application | Tries, Hash Maps, Heaps, etc.               |
| ⚡ Efficiency      | Time/space complexity annotated in code     |
| 🧱 Modularity      | All components are reusable and testable    |
| 🧪 Bonus Features  | Synonyms, typo correction, advanced ranking |
| 🖥️ CLI UX          | User-friendly CLI with clear input/output   |
| 📘 Documentation   | README + code comments                      |

---

## 📌 Future Enhancements

- GUI using Electron or Ink
- Multi-language query support
- Category-based filtering
- Product recommendation integration

---

## 👨‍💻 Author

Srikanth Dhondi – [LinkedIn](https://www.linkedin.com/in/srikanthdhondi)

---

## 📜 License

MIT – Use for educational and demonstration purposes.

````


---

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
````

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

## 💻 CLI Usage

### Basic run

```bash
node main.js
```

You’ll be prompted to input items in the cart, such as:

```bash
Enter cart items (comma-separated): milk,eggs
```

### Output Example

```bash
Cart: ["milk", "eggs"]
Suggestions:
 - bread (frequently bought together)
 - butter (combo deal)
 - bacon (breakfast combo)
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

## 🧾 License

MIT License – for educational/demo use.

---

## 👤 Author

Srikanth Dhondi – [LinkedIn](https://www.linkedin.com/in/srikanthdhondi)

---
