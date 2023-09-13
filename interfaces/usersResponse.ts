export interface UsersResponse {
    id:             string;
    documentNumber: string;
    address:        string;
    phoneNumber:    string;
    email:          string;
    password:       string;
    name:           string;
    role:           string[];
    token:          string;
}


export enum Role {
    User = "user",
}
// export type CreateUser = Omit<>
