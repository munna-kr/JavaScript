// Overview of Object Methods in JavaScript 
// --> Static Methods:
// These are functions that belong to the Object constructor, not to each object instance.

// --> Prototype Methods:
// These methods live in Object.prototype, and are available to every created object via the __proto__ link.

/*
--> Static methods belong to Object, 
--> Prototype methods belong to Object.prototype, 
and objects access them through the __proto__ link (prototype chain).

Object
│
├── 1) Static Methods (called on Object)
│   │
│   ├─ Object.assign(target, ...sources)
│   ├─ Object.create(proto, [propertiesObject])
│   ├─ Object.defineProperty(obj, prop, descriptor)
│   ├─ Object.defineProperties(obj, descriptors)
│   ├─ Object.entries(obj)
│   ├─ Object.fromEntries(iterable)
│   ├─ Object.keys(obj)
│   ├─ Object.values(obj)
│   ├─ Object.freeze(obj)
│   ├─ Object.seal(obj)
│   ├─ Object.preventExtensions(obj)
│   ├─ Object.getOwnPropertyDescriptor(obj, prop)
│   ├─ Object.getOwnPropertyDescriptors(obj)
│   ├─ Object.getOwnPropertyNames(obj)
│   ├─ Object.getOwnPropertySymbols(obj)
│   ├─ Object.getPrototypeOf(obj)
│   ├─ Object.setPrototypeOf(obj, prototype)
│   ├─ Object.hasOwn(obj, prop)        // modern alternative to hasOwnProperty
│   ├─ Object.is(value1, value2)
│   ├─ Object.isFrozen(obj)
│   ├─ Object.isSealed(obj)
│   ├─ Object.isExtensible(obj)
│   ├─ Object.groupBy(items, callbackFn)   // New (ES2023)
│   └─ Object.prototype === Prototype Link (not called directly)
│
└── 2) Prototype Methods (available on every object instance)
    │
    ├─ obj.hasOwnProperty(prop)
    ├─ obj.isPrototypeOf(object)
    ├─ obj.propertyIsEnumerable(prop)
    ├─ obj.toString()
    ├─ obj.toLocaleString()
    ├─ obj.valueOf()
    ├─ obj.__defineGetter__(prop, function)
    ├─ obj.__defineSetter__(prop, function)
    ├─ obj.__lookupGetter__(prop)
    ├─ obj.__lookupSetter__(prop)
    └─ obj.__proto__ (internal prototype link)
 */
// --> Static Methods = Called using:   Object.method(...)

// --> Prototype Methods = Called using:  objectInstance.method(...)
