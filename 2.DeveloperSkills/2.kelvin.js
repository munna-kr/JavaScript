'use strict';
////////////////////////////////////////
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',

    // C: fixing the bug
    value: Number(prompt('Enter the temperature:')),
  };
  // A: checking input value of prompt
  console.log(measurement.value);

  // B: checking the object key:value
  // console.log(measurement);
  console.table(measurement);
  // bug caught: prompt reutrn string data type
  // to fix: convert prompt return value to number datatype

  const kelvin = measurement.value + 273;
  console.log(kelvin);
};
measureKelvin();
