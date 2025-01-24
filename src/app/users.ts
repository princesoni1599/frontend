export class Coordinates {
    lat: number | undefined = undefined;
    lng: number | undefined = undefined;
}

export class Address {
    address: string | undefined;
    city: string | undefined;
    state: string | undefined;
    stateCode: string | undefined;
    postalCode: string | undefined;
    coordinates: Coordinates | undefined;
    country: string | undefined;
}

export class Hair {
    color: string | undefined;
    type: string | undefined;
}

export class Bank {
    cardExpire: string | undefined;
    cardNumber: string | undefined;
    cardType: string | undefined;
    currency: string | undefined;
    iban: string | undefined;
}

export class Company {
    department: string | undefined;
    name: string | undefined;
    title: string | undefined;
    address: Address | undefined; // Using the Address model here
}

export class Crypto {
    coin: string | undefined;
    wallet: string | undefined;
    network: string | undefined;
}

export class Users {
    id: number | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    maidenName: string | undefined;
    age: number | undefined;
    gender: string | undefined;
    email: string | undefined;
    phone: string | undefined;
    username: string | undefined;
    password: string | undefined;
    birthDate: string | undefined;
    image: string | undefined;
    bloodGroup: string | undefined;
    height: number | undefined;
    weight: number | undefined;
    eyeColor: string | undefined;
    hair: Hair | undefined;
    ip: string | undefined;
    address: Address | undefined; // Using the Address model here
    macAddress: string | undefined;
    university: string | undefined;
    bank: Bank | undefined;
    company: Company | undefined; // Using the Company model here
    ein: string | undefined;
    ssn: string | undefined;
    userAgent: string | undefined;
    crypto: Crypto | undefined; // Using the Crypto model here
    role: string | undefined;
}
