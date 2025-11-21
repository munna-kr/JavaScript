/*
### 3. Extract Email Usernames

**Scenario:** You receive a list of emails, and you want just the username (before "@").

**Tasks:**

* Convert emails to usernames
* Remove duplicates
*/
const emails = [
  'alice@example.com',
  'bob.smith@work.org',
  'carol123@school.edu',
  'alice@example.com',
  'john_doe@mail.net',
  'admin@company.com',
  'bob.smith@work.org',
  'tester99@dev.io',
];

// Extracting username from emails
function extractUserName(arr) {
  const names = [];
  for (const mail of arr) {
    const [name] = mail.split('@');
    names.push(name);
  }
  return names;
}
const username = extractUserName(emails);
console.log(username);

//extracting username: --> without loops
const extname = function (email) {
  return email.split('@')[0];
};
const users2 = emails.map(extname);
console.log(users2);

// Removes duplicates --> using set concept
const setNames = new Set([...username]);
const uniqueNames = [...setNames];
console.log(uniqueNames);
