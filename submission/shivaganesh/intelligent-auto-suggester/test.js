const Trie = require('./trie'); // ✅ Use ./ if it's in the same folder

const trie = new Trie();

trie.insert("apple", 30);
trie.insert("application", 15);
trie.insert("apply", 10);
trie.insert("appetite", 5);

console.log("🔎 Test: Suggestions for 'app'");
console.log(trie.getSuggestions("app"));
