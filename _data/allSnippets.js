const fs = require("fs");
const path = require("path");

const SNIPPETS_DIR = path.resolve(__dirname, '../snippets')

module.exports = function() {
    const snippetsDir = fs.readdirSync(SNIPPETS_DIR);
    const allSnippets = []
    for(const snippetJSON of snippetsDir) {
        const data = fs.readFileSync(path.resolve(SNIPPETS_DIR, snippetJSON)).toString();
        allSnippets.push({
            name: snippetJSON.replace('.json', ''),
            data: JSON.parse(data),
        })
    }

    return allSnippets
}