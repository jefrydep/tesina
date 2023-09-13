export interface LoginInterface {
  name: string;
  documentNumber: string;
  password: string;
}
 
export interface LoginResponse {
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

