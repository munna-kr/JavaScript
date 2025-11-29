### DOM Node Types
Node
│
├── Document Node  (nodeType = 9)
│   ├── documentElement  (<html>)
│   └── body / head / etc.
│
├── Element Node   (nodeType = 1)
│   ├── tagName
│   ├── attributes
│   │   ├── id
│   │   ├── class
│   │   └── any attribute
│   ├── children
│   ├── innerHTML
│   ├── outerHTML
│   ├── textContent
│   └── style
│
├── Text Node      (nodeType = 3)
│   ├── nodeValue   (actual text)
│   ├── data
│   └── length
│
└── Comment Node   (nodeType = 8)
    ├── nodeValue   (comment text)
    └── data

### DOM structure

Node
│
├── Node Properties
│   ├── nodeType
│   ├── nodeName
│   ├── nodeValue
│   ├── parentNode
│   ├── childNodes
│   ├── firstChild
│   ├── lastChild
│   ├── nextSibling
│   └── previousSibling
│
├── Node Types
│   │
│   ├── 1. Element Node
│   │     ├── <div>, <p>, <h1>, <span>
│   │     ├── tagName
│   │     ├── attributes
│   │     └── style
│   │
│   ├── 3. Text Node
│   │     ├── nodeValue ("actual text")
│   │     └── #text
│   │
│   ├── 8. Comment Node
│   │     └── <!-- comment -->
│   │
│   └── 9. Document Node
│         └── #document

### Example...
#document
│  ├── nodeType: 9
│  ├── nodeName: "#document"
│  └── nodeValue: null
│
├── <!DOCTYPE html> 
│   └── (doctype — nodeName: "html", nodeValue: null)
│
└── <html lang="en">
    │  ├── nodeType: 1
    │  ├── nodeName: "HTML"
    │  └── nodeValue: null
    │
    ├── <head>
    │   │  ├── nodeType: 1
    │   │  ├── nodeName: "HEAD"
    │   │  └── nodeValue: null
    │   │
    │   ├── <meta charset="UTF-8">
    │   │   ├── nodeType: 1
    │   │   ├── nodeName: "META"
    │   │   └── nodeValue: null
    │   │
    │   ├── <meta name="viewport" content="width=device-width, initial-scale=1.0">
    │   │   ├── nodeType: 1
    │   │   ├── nodeName: "META"
    │   │   └── nodeValue: null
    │   │
    │   └── <title>
    │       │  ├── nodeType: 1
    │       │  ├── nodeName: "TITLE"
    │       │  └── nodeValue: null
    │       │
    │       └── "Document"
    │          ├── nodeType: 3
    │          ├── nodeName: "#text"
    │          └── nodeValue: "Document"
    │
    └── <body>
        │  ├── nodeType: 1
        │  ├── nodeName: "BODY"
        │  └── nodeValue: null
        │
        ├── <h1>
        │   │  ├── nodeType: 1
        │   │  ├── nodeName: "H1"
        │   │  └── nodeValue: null
        │   │
        │   └── "Iam heading"
        │      ├── nodeType: 3
        │      ├── nodeName: "#text"
        │      └── nodeValue: "Iam heading"
        │
        ├── <div>
        │   │  ├── nodeType: 1
        │   │  ├── nodeName: "DIV"
        │   │  └── nodeValue: null
        │   │
        │   └── <p>
        │       │  ├── nodeType: 1
        │       │  ├── nodeName: "P"
        │       │  └── nodeValue: null
        │       │
        │       └── "Iam paragraph"
        │          ├── nodeType: 3
        │          ├── nodeName: "#text"
        │          └── nodeValue: "Iam paragraph"
        │
        ├── <p>
        │   │  ├── nodeType: 1
        │   │  ├── nodeName: "P"
        │   │  └── nodeValue: null
        │   │
        │   └── "another paragraph"
        │      ├── nodeType: 3
        │      ├── nodeName: "#text"
        │      └── nodeValue: "another paragraph"
        │
        ├── <!-- comment -->
        │   ├── nodeType: 8
        │   ├── nodeName: "#comment"
        │   └── nodeValue: " comment "
        │
        └── <script src="notes.js">
            │  ├── nodeType: 1
            │  ├── nodeName: "SCRIPT"
            │  └── nodeValue: null
            │
            └── ""  (empty text node inside script tag)
               ├── nodeType: 3
               ├── nodeName: "#text"
               └── nodeValue: ""        ← empty string
