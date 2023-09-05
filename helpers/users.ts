// import { Persona } from "@/interfaces/perona";
// import { StudentsResponse } from "@/interfaces/studentsResponse";
"use client"
import { Users } from "@/context/userContex";
import { LoginInterface } from "@/interfaces/loginInterface";
import { UsersResponse } from "@/interfaces/usersResponse";
import axios from "axios";

const API = "http://localhost:3000";
// interface PersonaResponse {
//   ide_per: string;
//   nom_per: string;
//   pat_per: string;
//   mat_per: string;
//   nro_doc: string;
//   fch_nac: string;
// }
export const getUserRequest = (token:string) => {
  const users = axios.get(`${API}/api/auth`, {
    headers:{
      Authorization: `Bearer ${token}`
      
    }
    
  });
  return users;
  // console.log(student);
};
// console.log("0dkjsfl");
// export const getUserRequest = () => {
//   const users = axios.get(`${API}/api/auth`);
//   return users;
// };
// export const deleteUserRequest = (id: string) =>
//   fetch(`${API}/api/auth/${id}`, {
//     method: "DELETE",
//   });
export const deleteUserRequest = (id: string) =>
  fetch(`${API}/api/auth/${id}`, {
    method: "DELETE",
  });

export const createUserRequest = async (user: LoginInterface) => {
  return fetch(`${API}/api/auth/register/`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// export const updateStudentRequest = async (user: LoginInterface) =>
//   fetch(`${API}/personas/`, {
//     method: "PATCH",
//     body: JSON.stringify(user),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

export const updateUserRequest = async (id: string,user:Users) =>
fetch(`${API}/api/auth/${id}`, {
    method: "PATCH",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });