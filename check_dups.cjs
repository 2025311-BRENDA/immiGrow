
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
    const langMatch = dictContent.match(new RegExp(`${lang}: \\{([\\s\\S]+?)\\n\\s+\\}(?:,|$)`));
    if (langMatch) {
        const lines = langMatch[1].split('\n');
        const keys = [];
        lines.forEach(line => {
            const m = line.match(/^\s+"([^"]+)":/);
            if (m) {
                const key = m[1];
                if (keys.includes(key)) {
                    console.log(`Duplicate key in ${lang}: ${key}`);
                }
                keys.push(key);
            }
        });
    }
});
