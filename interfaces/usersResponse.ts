export interface UsersResponse {
    id:             string;
    documentNumber: string;
    name:       string;
    isActive:       boolean;
    role:           Role[];
}

export enum Role {
    User = "user",
}
// export type CreateUser = Omit<>
