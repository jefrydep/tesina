export interface LoginInterface {
  name: string;
  documentNumber: string;
  password: string;
}
 
export interface LoginResponse {
    id:             string;
    documentNumber: string;
    password:       string;
    name:           string;
    role:           string[];
    token:          string;
}
