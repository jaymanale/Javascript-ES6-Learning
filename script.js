// variavle defined
var varData;
let letData;
//const constData; // it has to be initialized other throw error

console.log(varData);
console.log(letData);
//console.log(constData);

function array() {
  const array = [
    { a: 12, b: 54, c: [{ m: 'haha', n: 'nana' }, { m: 'haha', n: 'nana' }] },
    { a: 12, b: 54, c: [{ m: 'haha', n: 'nana' }, { m: 'haha', n: 'nana' }] },
    { a: 12, b: 54, c: [{ m: 'haha', n: 'nana' }, { m: 'haha', n: 'nana' }] },
    { a: 12, b: 54, c: [{ m: 'haha', n: 'nana' }, { m: 'haha', n: 'nana' }] },
    { a: 12, b: 544, c: [{ m: 'haha', n: 'nana' }, { m: 'haha', n: 'nana' }] }
  ];

  // const can change property in side it
  array[0].a = 99;
  // but can not redefined it again with same name
  array1 = {
    a: 12,
    b: 54,
    c: [{ m: 'haha', n: 'nana' }, { m: 'haha', n: 'nana' }]
  };
  console.table(array);
  console.log(array1);
}
console.log('HI Start...');
array();
