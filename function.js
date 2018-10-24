console.log('########## Start : Function.js #############');
//### 1-> Function
function array() {
  const funcObject = [
    { a: 12, b: 54, c: [{ m: 'haha', n: 'nana' }, { m: 'haha', n: 'nana' }] },
    { a: 12, b: 54, c: [{ m: 'haha', n: 'nana' }, { m: 'haha', n: 'nana' }] },
    { a: 12, b: 54, c: [{ m: 'haha', n: 'nana' }, { m: 'haha', n: 'nana' }] },
    { a: 12, b: 54, c: [{ m: 'haha', n: 'nana' }, { m: 'haha', n: 'nana' }] },
    { a: 12, b: 544, c: [{ m: 'haha', n: 'nana' }, { m: 'haha', n: 'nana' }] }
  ];

  // Possible :: you can change value of const object's property
  funcObject[0].a = 99;
  funcObject[0].d = 455;

  // Not Possible :: To redefined the same name of that const
  // It will throw error
  // array = {
  //   a: 12,
  //   b: 54,
  //   c: [{ m: 'haha', n: 'nana' }, { m: 'haha', n: 'nana' }]
  // };
  console.table(funcObject);
  //console.log(array1);

  const arrayObjet = [2, 5, 6, 3, 4];

  //Possible :: Push , pop or any other operation
  arrayObjet.push(55);
  arrayObjet.shift();
  const newArrayObj = [...arrayObjet];

  newArrayObj.pop();
  console.log('Array:', newArrayObj);

  // Not Possible ::
  //arrayObjet = [1]; // will throw error

  console.log('Array:', arrayObjet);
}
console.log('HI Start...');
array();
console.log('########## End : Function.js #############');
