module.exports = {
   '*.json?(x)': ['prettier --write', 'git add -A'],
   '*.md?(x)': ['prettier --write', 'git add -A']
}
