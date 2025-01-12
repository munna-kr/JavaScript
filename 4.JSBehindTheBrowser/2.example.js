// Each function has their own scope

// 'use strict';
function number() {
  //
  function number2() {
    function multi() {
      return 100;
    }
    multi();
    return 200;
  }

  if (1) {
    function add() {
      return 90;
    }
  }

  function number3() {
    // console.log(number2());
    console.log(add());
    // console.log(multi());
  }
  number3();
  number2();
}

number();
