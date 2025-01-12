const childGlobal = 'childGlobal';

function parent() {
  const childMain = 'childMain';

  function child1() {
    var child6 = 'child6';

    if (1) {
      var child3 = 'child3';
    }
    if (1) {
      const child4 = 'child4';
      console.log(child3);
    }
  }

  function child2() {
    // console.log(child6);
    if (1) {
      const child5 = 'child5';
    }
  }

  child2();
  child1();
}

function teacher() {
  const mathTeacher = 'mathTeacher';
}
parent();
