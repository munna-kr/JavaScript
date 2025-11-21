/**
### 9. Event Attendance Analytics

```js
const attendance = [
  { user: "A", events: ["login", "view", "logout"] },
  { user: "B", events: ["login", "error"] },
  { user: "C", events: ["login", "view"] }
];
```
/*
 

  ----------------------------------------------------
  QUESTIONS
  ----------------------------------------------------

  1. Get all users who logged in at least once.

  2. Find all users who encountered an "error".

  3. Count the total number of "view" events.

  4. Create an array of ALL unique event types (case-insensitive).
     Example:
     ["login", "view", "logout", "error", "purchase"]

  5. Create an array with the total event count for each user.
     Example:
     [
       { user: "A", count: 3 },
       { user: "B", count: 2 },
       ...
     ]

  6. Find all users who logged in more than once.

  7. Find users who have invalid events.
     Invalid events include:
     null, undefined, numbers, objects, wrong-case strings.

  8. Build a frequency object for ALL events.
     Example:
     {
       login: 12,
       view: 8,
       logout: 4,
       error: 3,
       purchase: 1
     }

  9. Count "sessions" per user.
     A session = user has "login" AND "logout" in their events.
     Output:
     [
       { user: "A", sessions: 1 },
       ...
     ]

  10. Identify suspicious behavior.
      Suspicious if:
      - User logs out without login
      - User has "error" without login
      - Wrong event casing ("Login", "VIEW")

  11. Build a leaderboard ranking users by MOST total events.

  12. Normalize the events:
      - convert all to lowercase
      - remove invalid entries
      Expected output:
      [
        { user: "A", events: ["login", "view", "logout"] },
        ...
      ]

===========================================
*/

const attendance = [
  { user: 'A', events: ['login', 'view', 'logout'] },
  { user: 'B', events: ['login', 'error'] },
  { user: 'C', events: ['login', 'view'] },

  // more normal entries
  { user: 'D', events: ['login', 'purchase', 'logout'] },
  { user: 'E', events: ['login', 'view', 'view', 'logout'] },
  { user: 'F', events: ['login'] },

  // edge cases
  { user: 'G', events: [] }, // no events
  { user: 'H', events: ['login', 'login', 'view'] }, // repeated events
  { user: 'I', events: ['error', 'error'] }, // only errors
  { user: 'J', events: ['logout'] }, // logout without login
  { user: 'K', events: ['VIEW', 'Login'] }, // wrong casing
  { user: 'L', events: [null, 'login'] }, // invalid values
  { user: 'M', events: ['login', 123, 'view'] }, // invalid event type
  { user: 'N' }, // missing events
  { user: 'O', events: undefined }, // undefined events
];
