## 📌 Capstone Project Assignment

### 🧠 **Project Title:**

**Contract Intelligence Validator – Rule-Based Clause Checker**

---

### 🧾 **Problem Statement:**

Develop a rule-based document analyzer that parses legal contracts to identify the presence, absence, or incorrect phrasing of key clauses. The system should simulate a contract review assistant, flagging non-compliance and high-risk language using data structures and rule logic — no ML or NLP models allowed.

---

### 📚 **Module Relevance (DSA Concepts):**

- `Tries / Hash Maps:` Efficient lookup of key clause phrases and legal terms
- `Stacks:` Handling nested conditions within clauses (e.g., "if...then...else")
- `Linked Lists:` Dynamic traversal and modification of contract content
- `Trees:` To map contract structure (section → sub-section → clauses)

---

### 🚫 **Constraints:**

1. Input contracts must be in plain `.txt` or simplified `.docx` format.
2. Must flag **at least 5 critical clauses** based on provided rules.
3. Use only **offline parsing** (no paid NLP APIs or ML models).
4. Highlight both **missing clauses** and **risky phrases**.
5. Must produce a **compliance summary report** for each document.

---

### 🎯 **Expected Outcome:**

- A CLI or minimal UI tool that:

  - Parses and tokenizes contract content.
  - Searches for predefined clause patterns or red-flag terms.
  - Outputs a structured report with:

    - ✅ Present Clauses
    - ❌ Missing Clauses
    - ⚠️ Risky Clauses / Phrases

- Document hierarchy and parsing logic must be traceable in code.

---

### 🧮 **Sample Validation Rules:**

- Check if **"Termination for Convenience"** clause is present.
- Flag phrases like **"indemnify without limit"**, **"binding arbitration only"**.
- Validate the presence of **governing law**, **payment terms**, **liability cap**.
- Flag repetition or ambiguous phrases like **"to the best of knowledge"**.

---

### 📤 **Deliverables:**

- Source Code (with documentation)
- Sample contract inputs (2–3 legal text files)
- Rule file (`rules.json` or similar format)
- Compliance summary reports (`report.csv` or `.txt`)
- Optional: Demo video or UI screenshots

---

### 📏 **Evaluation Rubric:**

| Criteria                              | Weightage | Description                                                 |
| ------------------------------------- | --------- | ----------------------------------------------------------- |
| ✅ Functionality                      | 30%       | Can accurately identify required clauses and red flags      |
| 📐 DSA Application                    | 25%       | Efficient and correct use of Tries, Trees, Hash Maps, etc.  |
| 📄 Rule Complexity & Legal Logic      | 15%       | Quality of rule definitions and legal clause interpretation |
| 🖥️ Code Quality & Documentation       | 15%       | Readable, well-documented code with comments                |
| 📊 Report Generation & UI             | 10%       | Clear, structured summary of findings                       |
| 🎁 Bonus Features (Clause Tree, Undo) | 5%        | Extras like document hierarchy view or interactive review   |

---
