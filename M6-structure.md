# Module 6

## File Organization Comparison

### Before (Flat Structure)

it0043-portfolio/
├── index.html
├── style.css
├── script.js
└── README.md

### After (Organized Structure)

it0043-portfolio/
├── .git/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
├── index.html
├── M6-audit-findings.pdf
├── M6-corruption-drill.pdf
├── M6-structure.md
└── README.md

## Reason for These:

1. **Separation of Concerns:** Moving stylesheets into /css and JavaScript files into /js isolates how it is presented.

2. **Maintainability & Scalability:** Grouping them by file type keeps root directories clean and easier to navigate.

3. **Path Clarity:** Standard directory conventions eliminate ambiguous file references.