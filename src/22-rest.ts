import { User, ROLES } from './products/enums';

const currentUser: User = {
  username: 'nicoBytes',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () =>{
  currentUser.role === ROLES.ADMIN ? console.log( true ): console.log( false );
}

// checkAdminRole();

export const checkRole = (roles: string[]) => {

  if( roles.includes( currentUser.role )) return true;
  return false;
}

const rta = checkRole([ROLES.ADMIN, ROLES.CUSTOMER]);
console.log( rta )


export const checkRole2 = (...roles: string[]) => {

  if( roles.includes( currentUser.role )) return true;
  return false;
}

const rta2 = checkRole2(ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER);
console.log( rta2 )
