export interface Address {
    street: string;
    zipcode: string;
    city: string;
    province: string;
    country: string;
}

export interface UserModel {
    firstname: string;
    lastname: string;
    email: string;
    birthDate: Date;
    gender: string;
    addresses: Address[];
    id: string;
}