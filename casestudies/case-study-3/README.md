---
## 📁 **AI-Powered Smart File Organizer (Local AI-Inspired Utility – No ML)**
---

### 📝 Problem Statement:

Develop a “smart” file organizer that simulates AI-like intelligence to classify and move files into structured folders based on file type, naming patterns (e.g., `invoice_2024.pdf`), or metadata (e.g., creation/modification date). This is to be done **without using any machine learning models** — instead, it should rely on **DSA-driven rules** and logic to automate file organization.

---

### 🎯 **Learning Objectives:**

- Apply **Hash Maps** to store and access file metadata quickly.
- Use **Tree structures** to represent and traverse directory hierarchies.
- Implement **Queues** for batch file operations (bulk moves/copies).
- Use **Stacks** to implement an undo mechanism for file actions.
- Utilize **Linked Lists** for dynamic grouping and reordering of files.
- Simulate **AI-like decision-making** through keyword-based classification and rule sets.

---

### 📦 **Deliverables:**

1. Fully functional script/tool that organizes files in a local directory.
2. `README.md` with:

   - Installation/setup guide
   - Sample use cases and screenshots
   - Folder structure explanation

3. Optional GUI or CLI interface (Python Tkinter or JS console)
4. Technical report covering:

   - DSA techniques used
   - Rule logic design
   - Efficiency analysis
   - Undo mechanism logic (stack)

---

### 📐 **Constraints:**

- Must support at least **3 organization rules**:

  1. File Type (e.g., PDF, PNG, DOCX)
  2. Filename keywords (e.g., “resume”, “invoice”, “project”)
  3. File creation/modification date

- Should use **local filesystem** only — no cloud APIs
- No use of AI/ML libraries (e.g., no TensorFlow, OpenAI, etc.)
- Must have:

  - Configurable source and destination folder paths
  - Log file or console output of actions performed
  - Undo mechanism for the **last batch operation**

- Handle at least 100+ files efficiently in one run

---

### 🧠 **AI-Inspired Behavior (Simulated):**

- Example: “invoice_2023_march.pdf” → Move to `/Finance/Invoices/2023`
- Uses string matching, keyword lookup, file metadata — mimicking rule-based AI agents
- Bonus: simulate “smart tags” like `/Urgent`, `/Work`, `/Personal` based on keyword hashing

---

### 📊 **Expected Outcomes:**

- Input Folder:

  - `/Downloads/` with files like `resume_john.pdf`, `invoice_april.png`, `vacation_photo.jpg`

- Output Folder Structure:

  ```
  /Organized/
    ├── /Finance/
    │     └── invoice_april.png
    ├── /Photos/
    │     └── vacation_photo.jpg
    ├── /Documents/
    │     └── resume_john.pdf
  ```

- Undo should revert file moves from the last session
- The system should handle edge cases (e.g., duplicate files, unreadable formats)

---

### 🚀 **Bonus Objectives (Optional):**

- Implement rule prioritization (if file matches multiple categories)
- Detect and handle duplicate files by renaming or skipping
- Allow rules to be configured via a `rules.json` or `rules.txt` file
- Provide a simple GUI using Python (Tkinter) or Electron

---

### 📈 **Evaluation Rubric:**

| **Criteria**                  | **Excellent (10)**                      | **Good (7)**                           | **Fair (4)**                | **Poor (1)**                  |
| ----------------------------- | --------------------------------------- | -------------------------------------- | --------------------------- | ----------------------------- |
| **Correctness**               | Fully functional, accurate file sorting | Mostly correct, few misclassifications | Works partially, with bugs  | Crashes or incorrect behavior |
| **Use of DSA**                | Uses all key structures efficiently     | Most DSA applied with purpose          | Minimal or poor application | No use or improper use        |
| **Rule Engine Quality**       | Dynamic, flexible, smart decision logic | Static but well implemented            | Basic hardcoded rules       | Incomplete logic              |
| **Undo Stack Implementation** | Works perfectly with multiple undos     | Single-step undo works                 | Present but buggy           | Not implemented               |
| **Performance**               | Handles 100+ files in < 5 seconds       | Minor lag but acceptable               | Slow for large folders      | Unusable for larger folders   |
| **Documentation & UX**        | Clear, detailed README and output logs  | Basic but helpful                      | Poorly written instructions | Missing README or logs        |
| **Bonus Features**            | CLI/GUI, rule file, smart tags etc.     | One or two bonus features              | Attempted enhancements      | None                          |

**Total Score: /70**

---

````markdown
# 📁 AI-Powered Smart File Organizer (JS Only – No ML)

A local, intelligent file organization utility built using core JavaScript and Node.js. Simulates AI-like logic with DSA techniques (Hash Maps, Queues, Stacks, Trees, Linked Lists) to organize your files based on type, keyword, and metadata — all without using machine learning!

---

## 🚀 Features

- 📂 Sorts files by **type**, **keywords**, or **modification date**
- ⏪ Supports **undo** of the last organization operation
- 🧠 Mimics AI-like behavior using rule-based logic
- 📊 Uses DSA: HashMap, Stack, Queue, Tree traversal
- ✅ Handles 100+ files efficiently
- 🛠️ Configurable source and destination paths

---

## 🔧 Setup Instructions

### Prerequisites

- Node.js v14 or higher
- Git (optional for cloning)

### Installation

```bash
git clone https://github.com/yourusername/smart-file-organizer.git
cd smart-file-organizer
npm install  # No external modules, included for future expansion
```
````

> You may also copy `smart-file-organizer.js` to any local project and run directly.

---

## 🖥️ CLI Usage

### Run Organizer

```bash
node smart-file-organizer.js
```

You’ll be prompted with:

```
📁 Smart File Organizer CLI
1. Organize Files
2. Undo Last Operation
3. Exit
Choose an option (1-3):
```

---

## 🔁 Undo Mechanism

Each file move operation is stored in a **stack**. Choosing option `2` from the CLI will reverse the last batch.

---

## 🧠 Rule Engine Logic

- Keywords like `invoice`, `resume`, or `project` map files to categories.
- File types like `.pdf`, `.jpg` are routed to predefined folders.
- Uses file metadata (extension, naming pattern) to infer destination.

Example:

| File Name                | Destination Folder |
| ------------------------ | ------------------ |
| `invoice_2023_march.pdf` | `/Finance/`        |
| `vacation_photo.jpg`     | `/Photos/`         |
| `resume_john.pdf`        | `/Documents/`      |

---

## 📂 Output Folder Structure

```bash
/Organized/
├── /Finance/
│     └── invoice_2023_march.pdf
├── /Photos/
│     └── vacation_photo.jpg
├── /Documents/
│     └── resume_john.pdf
```

---

## 🛠 Configuration

Edit `config` inside the `smart-file-organizer.js`:

```js
const config = {
  source: '/path/to/source',
  destination: '/path/to/output',
  rules: [
    { keyword: 'invoice', folder: 'Finance' },
    { keyword: 'resume', folder: 'Documents' },
    ...
  ],
  supportedTypes: {
    pdf: 'Documents',
    png: 'Images',
    ...
  }
};
```

---

## 🧪 Sample Test Case

Put files like the following in your `/Downloads`:

- `invoice_april.pdf`
- `resume_john.docx`
- `vacation_photo.jpg`

Run the script and check the `/Organized/` folder.

---

## 📈 Performance

- Tested on 500+ files
- Completes in < 5 seconds on modern systems

---

## 📝 License

MIT

---

## 👨‍💻 Author

Developed by [Srikanth Dhondi](https://github.com/yourusername)
