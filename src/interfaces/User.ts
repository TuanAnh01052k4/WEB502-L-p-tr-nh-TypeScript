// Users

export type hairUser = {
  color: string;
  type: string;
};

export type addressUser = {
  address: string;
  city: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  postalCode: string;
  state: string;
};

export type bankUser = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};
export type companyUser = {
  address: addressUser;
  department: string;
  name: string;
  title: string;
};

export type cryptoUser = {
  coin: string;
  wallet: string;
  network: string;
};

export type userType = {
  id?: string | number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: hairUser;
  domain: string;
  ip: string;
  address: addressUser;
  macAddress: string;
  university: string;
  bank: bankUser;
  company: companyUser;
  ein: string;
  ssn: string;
  userAgent: string;
  crypto: cryptoUser;
};
