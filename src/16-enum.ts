enum ROLES {
  ADMIN = 'Admin',
  SELLER = 'Seller',
  CUSTOMER = 'Customer',
}

type User = {
  username: string,
  role: ROLES,
}

const nicoUser: User = {
  username: 'nicobytes',
  role: ROLES.ADMIN
}
