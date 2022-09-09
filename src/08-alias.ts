(() => {
  type UserID = number | string | boolean;
  let userID: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'L';
  console.log( shirtSize );
  shirtSize = 'M';
  console.log( shirtSize );

  const greeting = ( userID: UserID, size: Sizes) => {
    if (typeof userID === 'string') console.log( userID.toLocaleUpperCase(), size )
  }

  greeting('Hola', 'L');

})();
