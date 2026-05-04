const fs = require('fs');
const path = require('path');

const replacements = {
    '#1295ea': '#1075b8',
    '#1594ee': '#1075b8',
    '#7b8491': '#525b64',
    '#0879bd': '#0769a3',
    '#0d83cf': '#0a6ea3',
    '#087ed0': '#0a6ea3',
    'text-white/95': 'text-white',
    'text-white/90': 'text-white'
};

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const srcDir = path.join(process.cwd(), 'src');

walkDir(srcDir, (filePath) => {
    if (filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        for (const [oldStr, newStr] of Object.entries(replacements)) {
            if (content.includes(oldStr)) {
                const regex = new RegExp(oldStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                content = content.replace(regex, newStr);
                modified = true;
            }
        }
        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated: ${filePath}`);
        }
    }
});
