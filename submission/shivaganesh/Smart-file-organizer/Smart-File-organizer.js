/* ---------------------------------------------------------------------------
   📁 smart-file-organizer.js  (FINAL + Bonus)
   • Hash Map  – extension lookup
   • Queue     – batch processing
   • Stack     – undo & redo
   • Tree      – folder creation traversal
   • Linked List – per-folder file list (demo)
--------------------------------------------------------------------------- */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { performance } = require('perf_hooks');

/* ------------------ 1. Configuration ------------------ */
const config = {
  source: path.join(__dirname, 'sample-test-files'),
  destination: path.join(__dirname, 'organized-files'),
  rules: [
    { keyword: 'invoice', folder: 'Finance' },
    { keyword: 'resume',  folder: 'Documents' },
    { keyword: 'project', folder: 'Projects' },
    { keyword: 'photo',   folder: 'Photos'   },
    { keyword: 'report',  folder: 'Reports'  },
  ],
  supportedTypes: { pdf:'Documents', docx:'Documents', png:'Images', jpg:'Images', jpeg:'Images' }
};

/* ------------------ 2. Data-structures ------------------ */
const undoStack = [];                // LIFO  ↩️
const redoStack = [];                // LIFO  ↪️

/* Simple singly-linked list node (for demo grouping) */
class ListNode {
  constructor(value) { this.value = value; this.next = null; }
}
/* Map: subFolder → head of linked list */
const folderLists = {};              // HashMap  (subFolder -> LinkedList)

/* ------------------ 3. Helper functions ------------------ */
const ensure = p => fs.existsSync(p) || fs.mkdirSync(p, { recursive:true });

const targetSubFolder = (fileName, ext) => {
  const extKey = ext.slice(1).toLowerCase();        // ".pdf" -> "pdf"
  for (const r of config.rules) if (fileName.toLowerCase().includes(r.keyword)) return r.folder;
  return config.supportedTypes[extKey] || 'Misc';
};

/* ------------------ 4. Organize ------------------ */
function organizeFiles() {
  ensure(config.destination);
  const queue = fs.readdirSync(config.source);      // FIFO batch

  if (!queue.length) return console.log('⚠️  No files to organize.');

  console.log('\n📦 Organising files ...\n');
  const t0 = performance.now();

  while (queue.length) {
    const file = queue.shift();                     // dequeue
    const src  = path.join(config.source, file);
    if (!fs.statSync(src).isFile()) continue;

    const sub  = targetSubFolder(file, path.extname(file));
    const destFolder = path.join(config.destination, sub);
    const dest = path.join(destFolder, file);

    ensure(destFolder);
    fs.renameSync(src, dest);
    undoStack.push({ from: dest, to: src });

    /* Linked-list grouping demo */
    const node = new ListNode(file);
    node.next = folderLists[sub] || null;           // prepend
    folderLists[sub] = node;

    console.log(`✅  ${file}  →  /${sub}`);
  }

  const t1 = performance.now();
  console.log(`\n🎉  Done in ${(t1 - t0).toFixed(1)} ms.\n`);
}

/* ------------------ 5. Undo / Redo ------------------ */
function undoLast() {
  if (!undoStack.length) return console.log('⚠️  Nothing to undo.');
  console.log('\n↩️  Undoing ...\n');
  while (undoStack.length) {
    const { from, to } = undoStack.pop();
    if (fs.existsSync(from)) { fs.renameSync(from, to); redoStack.push({ from: to, to: from }); }
  }
  console.log('✅  Undo done.\n');
}

function redoLast() {
  if (!redoStack.length) return console.log('⚠️  Nothing to redo.');
  console.log('\n↪️  Redoing ...\n');
  while (redoStack.length) {
    const { from, to } = redoStack.pop();
    if (fs.existsSync(from)) { fs.renameSync(from, to); undoStack.push({ from: to, to: from }); }
  }
  console.log('✅  Redo done.\n');
}

/* ------------------ 6. CLI ------------------ */
function menu() {
  const rl = readline.createInterface({ input:process.stdin, output:process.stdout });
  console.log('📁 Smart File Organizer');
  console.log('1. Organize Files');
  console.log('2. Undo Last Operation');
  console.log('3. Redo Last Undo');
  console.log('4. Exit');
  rl.question('Choose (1-4): ', c => {
    rl.close();
    if (c.trim()==='1') organizeFiles();
    else if (c.trim()==='2') undoLast();
    else if (c.trim()==='3') redoLast();
    else return console.log('👋 Bye!');
    menu();
  });
}

/* ------------------ 7. Start ------------------ */
menu();
