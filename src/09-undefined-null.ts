(()=>{
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  console.log(myNumber);
  myNumber = 1;
  console.log(myNumber);
  let myNumber2: number | undefined = undefined;
  console.log( myNumber2 );
  myNumber2 = 2;
  console.log(myNumber2);

  const hi = ( name: string | null) => {
    let hello = 'hola ';
    ( name ) ? console.log(hello += name ) : console.log( hello += 'nobody' );
  }
  hi('nicolas');
  hi(null);

  const hiV2 = (name: string | null) => {
    let hello = 'Hola ';
    hello += name?.toLocaleLowerCase() || 'nobody';
    console.log( hello )
  }
  hiV2('Nico');
  hiV2(null);
})();
