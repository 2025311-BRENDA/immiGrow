
const fs = require('fs');
const content = fs.readFileSync('c:/Users/35383/.gemini/antigravity/scratch/immiGrow/context/LanguageContext.tsx', 'utf8');

const dictionariesMatch = content.match(/export const dictionaries = \{([\s\S]+?)\n\};/);
if (!dictionariesMatch) {
    console.log("Dictionaries not found");
    process.exit(1);
}

const dictContent = dictionariesMatch[1];
const langs = ['en', 'es', 'pt'];

langs.forEach(lang => {
    // Find everything between lang: { and the closing } for that lang
    const startIdx = dictContent.indexOf(`${lang}: {`);
    if (startIdx === -1) return;

    let depth = 0;
    let endIdx = -1;
    for (let i = startIdx + lang.length + 3; i < dictContent.length; i++) {
        if (dictContent[i] === '{') depth++;
        if (dictContent[i] === '}') {
            if (depth === 0) {
                endIdx = i;
                break;
            }
            depth--;
        }
    }

    if (endIdx !== -1) {
        const langBlock = dictContent.substring(startIdx, endIdx);
        const lines = langBlock.split('\n');
        const keys = new Map();
        lines.forEach((line, lineNum) => {
            const m = line.match(/^\s+"([^"]+)":/);
            if (m) {
                const key = m[1];
                if (keys.has(key)) {
                    console.log(`Duplicate key in ${lang}: "${key}" (found at relative line ${lineNum}, first seen at ${keys.get(key)})`);
                }
                keys.set(key, lineNum);
            }
        });
    }
});
