 
import { UserContext } from "@/context/userContex";
import { useContext } from "react";
 

export const useUsers = () => {
  const users = useContext(UserContext);
  console.log(users);
  console.log("hola");
  if (!users)
    throw new Error(" user  must be used within a userProvier");
  return users;
};