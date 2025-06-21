// trie.js

// ✅ Step 1: Define TrieNode
class TrieNode {
    constructor() {
        this.children = {};           // a -> TrieNode, b -> TrieNode
        this.isEndOfWord = false;     // Marks end of word
        this.frequency = 0;           // Correct spelling now
    }
}

// ✅ Step 2: Define Trie class
class Trie {
    constructor() {
        this.root = new TrieNode();   // Root node
    }

    insert(word, frequency) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }

        node.isEndOfWord = true;
        node.frequency = frequency;
    }

    searchPrefix(prefix) {
        let node = this.root;

        for (let char of prefix) {
            if (!node.children[char]) {
                return null;
            }
            node = node.children[char];
        }

        return node;
    }

    // ✅ Step 3: Suggestion Function
    getSuggestions(prefix, limit = 5) {
        const node = this.searchPrefix(prefix);
        if (!node) return [];

        const results = [];

        function dfs(currentNode, path) {
            if (currentNode.isEndOfWord) {
                results.push({
                    word: prefix + path,
                    frequency: currentNode.frequency
                });
            }

            for (let char in currentNode.children) {
                dfs(currentNode.children[char], path + char);
            }
        }

        dfs(node, '');

        return results
            .sort((a, b) => b.frequency - a.frequency)
            .slice(0, limit);
    }
}

// ✅ Step 4: Export the class
module.exports = Trie;
