(()=>{
  let isEnable: boolean = true;
  console.log('isEnable', isEnable);
  isEnable = false;
  console.log('isEnable', isEnable);

  const random = Math.random();
  console.log('random', random);
  isEnable = random >= 0.5 ? true : false
  console.log('isEnable', isEnable)
})();
