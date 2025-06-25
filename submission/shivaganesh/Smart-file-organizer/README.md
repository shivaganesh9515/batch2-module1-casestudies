````markdown
# 📁 AI-Powered Smart File Organizer (JS Only – No ML)

A local, intelligent file organization utility built using core **JavaScript (Node.js)**.  
Simulates AI-like logic with **DSA techniques** such as **Hash Maps**, **Stacks**, **Queues**, **Trees**, and **Linked Lists** to organize your files based on type, keywords, and metadata — **without using any machine learning models**.

---

## 🚀 Features

- 🔍 Uses **Hash Maps** for quick file type and keyword lookup
- ⏪ Supports **Undo** and ⏩ **Redo** operations using stacks
- 📦 **Batch file processing** using queue logic
- 🌳 Simulates **tree traversal** during dynamic folder creation
- 🧩 Demonstrates **Linked Lists** for grouping files logically
- 🧠 Keyword and file-type-based **rule engine**
- ✅ Organizes 100+ files efficiently in seconds

---

## 🛠 Setup Instructions

### Prerequisites

- Node.js v14 or above
- Terminal / Command Prompt

### Installation

```bash
git clone https://github.com/yourusername/smart-file-organizer.git
cd smart-file-organizer
````

> Alternatively, copy the `smart-file-organizer.js` file into your project folder.

---

## 🖥️ How to Use

### Step 1: Prepare folders

* Create a folder named `sample-test-files` in the same directory.
* Add some test files like:

  * `invoice_april.pdf`
  * `resume_john.docx`
  * `vacation_photo.jpg`
  * `project_notes.txt`

### Step 2: Run the script

```bash
node smart-file-organizer.js
```

You’ll see:

```
📁 Smart File Organizer
1. Organize Files
2. Undo Last Operation
3. Redo Last Undo
4. Exit
Choose (1-4):
```

Choose options and follow the interactive prompts.

---

## 📂 Output Folder Structure

```
/organized-files/
├── /Finance/
│     └── invoice_april.pdf
├── /Documents/
│     └── resume_john.docx
├── /Photos/
│     └── vacation_photo.jpg
├── /Projects/
│     └── project_notes.txt
```

---

## 🔁 Undo / Redo Support

* `Undo`: Moves files back to the original folder using a **stack**
* `Redo`: Re-applies the last undone operation

---

## 🧠 Rule Engine Logic

| File Name            | Matched Rule     | Final Folder |
| -------------------- | ---------------- | ------------ |
| `invoice_april.pdf`  | Keyword: invoice | `Finance`    |
| `resume_john.docx`   | Keyword: resume  | `Documents`  |
| `vacation_photo.jpg` | Keyword: photo   | `Photos`     |
| `notes.txt`          | Type fallback    | `Misc`       |

---

## 📚 DSA Techniques Used

| DSA Technique   | Purpose                                    |
| --------------- | ------------------------------------------ |
| **Hash Map**    | Fast file type/keyword lookup              |
| **Stack**       | Undo/Redo file operations                  |
| **Queue**       | Batch file processing logic                |
| **Tree**        | Folder hierarchy creation                  |
| **Linked List** | File grouping (per folder, demo structure) |

---

## 🧪 Performance

* Handles 100+ files in under 3 seconds on modern systems
* Lightweight, with no external dependencies

---

## 📃 License

MIT

---

## 👨‍💻 Author

Developed by [Shivaganesh Gajavelli](https://github.com/shivaganesh9515)
