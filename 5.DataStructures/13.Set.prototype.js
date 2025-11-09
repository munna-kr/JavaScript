/*
==> All built-in instance methods for Set (like .add(), .has(), .union(), etc.) are located on Set.prototype.


/*
Set (Constructor Function)
│
├─ Creates → Set Instances
│   ├─ Stores → Unique values
│   │   ├─ Any type (primitives + objects)
│   │   ├─ Identity-based (SameValueZero)
│   │   ├─ Insertion order preserved
│   │   └─ Fast lookup (hash-like internal structure)
│   │
│   ├─ Contains only DATA
│   │   └─ No methods stored directly on instance
│   │
│   └─ Prototype Chain Lookup
│       s → Set.prototype → Object.prototype → null
│
├─ Set.prototype (Shared Methods Live Here)
│   ├─ Core Methods
│   │   ├─ add(value)
│   │   ├─ delete(value)
│   │   ├─ has(value)
│   │   ├─ clear()
│   │   ├─ size (property)
│   │   ├─ forEach(callback)
│   │   ├─ values() / keys()
│   │   └─ entries()
│   │
│   └─ ES2024+ Set Math Methods
│       ├─ union(other)
│       ├─ intersection(other)
│       ├─ difference(other)
│       ├─ symmetricDifference(other)
│       ├─ isSubsetOf(other)
│       ├─ isSupersetOf(other)
│       └─ isDisjointFrom(other)
│
├─ Requires → new Set()
│   └─ Cannot call Set() without new
│
└─ Version Support Notes
    ├─ New methods need modern engine
    │   ├─ Chrome/Edge 122+
    │   ├─ Firefox 127+
    │   ├─ Safari 17+
    │   └─ Node 22+
    └─ Otherwise: TypeError: .union is not a function


==> all built-in instance methods for Set are located on Set.prototype:
    Set  (constructor function)
└── prototype  (shared by all Set instances)
    ├── add()
    ├── delete()
    ├── has()
    ├── clear()
    ├── values()
    ├── keys()
    ├── entries()
    ├── forEach()
    ├── union()                  ← new ES2024+
    ├── intersection()           ← new ES2024+
    ├── difference()             ← new ES2024+
    ├── symmetricDifference()    ← new ES2024+
    ├── isSubsetOf()             ← new ES2024+
    ├── isSupersetOf()           ← new ES2024+
    └── isDisjointFrom()         ← new ES2024+
*/
// example to show that all built-in instance methods for Set are located on Set.prototype:
const s = new Set([1, 2, 3]);
console.log(s.hasOwnProperty('add')); // false
console.log(Set.prototype.hasOwnProperty('add')); // true
