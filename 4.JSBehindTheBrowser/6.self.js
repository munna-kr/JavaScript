'use strict';

const human = {
  animal: 'Human',
  sciName: 'Homo Sapiens',
  type: 'social',

  displaySciName: function () {
    console.log(`The scientific name of ${this.animal} is ${this.sciName}.`);

    // when 'this' is used inside method, it give value of undefined
    // solution to fix is:

    // ===> solution1 : using self

    const self = this;
    const isWild = function () {
      console.log(self);
      console.log(`this is ${self.type}`);
    };

    // ===> solution 2: using arrow function

    // const isWild = () => {
    //   console.log(this);
    //   console.log(`this is ${this.type}`);
    // };

    isWild();
  },
};
human.displaySciName();
