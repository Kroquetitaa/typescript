(()=> {
  let prices: number[] = [1,2,3,4,5,6,7,8,9,10];
  console.log( prices );
  let mixed: (number | string | boolean | Object)[] = ['hola', true];
  mixed.push(12);
  mixed.push('asd');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);
  console.log( mixed )
})();
