export enum ROLES {
  ADMIN = 'Admin',
  SELLER = 'Seller',
  CUSTOMER = 'Customer',
}

export type User = {
  username: string,
  role: ROLES,
}

export const nicoUser: User = {
  username: 'nicobytes',
  role: ROLES.ADMIN
}
