'use strict';

// ======> STRING Part 2 <=======

const org = 'IndiaN spAce rEseARcH orGaNisatioN';

//===> changing the case <===
//
// all lowercase
const orgLowercase = org.toLowerCase();
//
// all uppercase
const orgUppercase = org.toUpperCase();
//
// --> changing first Character to uppercase and rest lowercase
const firstUpper = org[0].toUpperCase() + org.slice(1).toLowerCase();

// ===> removing whitespace: trim() <===
const orgEmail = '   isro@mail.in  \n';
console.log(orgEmail);
console.log(orgEmail.toLowerCase().trim());

// ===> replacing: replace() <===
// --> case sensitive
const price = 'Rs20,140';
const rsWithSymbol = price.replace('Rs', '₹');
//
let announcement =
  'All passenger come to boarding door 23, boarding door 23 !! ';
// replace 1st occurrence only
announcement = announcement.replace('door', 'gate');
console.log(announcement);
// replace all occurrence
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// ===> include methods: includes() <===
// return booelan value
const bike = 'Royal Enfield gt 650';
console.log(bike.includes('gt'));

// ===> startsWith() <===
console.log(bike.startsWith('Royal'));
console.log(bike.startsWith('Ducati'));
console.log(bike.startsWith('Ro'));
//-->
if (bike.startsWith('Royal') && bike.includes('gt')) {
  console.log('GT model of Royal Enfield');
}
// -->

function checkBaggage(items) {
  const baggage = items.toLowerCase().trim();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed');
  } else {
    console.log('Welcome aboard!');
  }
}

const passenger1 = 'I have a Laptop, some snacks and a pocket knife';
const passenger2 =
  'I have camera, some dry foods and a Russian model gun for own protection';
const passenger3 = 'I have camera, some clothes and a notebooks ';

// checking ...
checkBaggage(passenger1);
checkBaggage(passenger3);
checkBaggage(passenger2);
