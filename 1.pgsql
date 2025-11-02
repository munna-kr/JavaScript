                  ┌────────────────────────────┐
                  │        Object.prototype    │
                  │ ─────────────────────────  │
                  │ toString()                 │
                  │ hasOwnProperty()           │
                  │ valueOf()                  │
                  └──────────────▲─────────────┘
                                 │ (inherits)
                  ┌──────────────┴─────────────┐
                  │       Array.prototype      │
                  │ ─────────────────────────  │
                  │ push()                     │
                  │ pop()                      │
                  │ map()                      │
                  │ filter()                   │
                  │ reduce()                   │
                  │ forEach()                  │
                  │ slice()                    │
                  │ concat()                   │
                  └──────────────▲─────────────┘
                                 │ (inherits)
                  ┌──────────────┴─────────────┐
                  │          arr = [1,2,3]     │
                  │  (your actual array object)│
                  └────────────────────────────┘
