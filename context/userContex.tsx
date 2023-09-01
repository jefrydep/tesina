"use client";
import {
  createUserRequest,
  getUserRequest,
  deleteUserRequest,
  updateUserRequest,
} from "@/helpers/users";
import { UsersResponse } from "@/interfaces/usersResponse";
import { PropsWithChildren, createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
export interface Users {
  name: string;
  documentNumber: string;
  password: string;
}
interface userContextValue {
  users: UsersResponse[];
  createUser: (user: Users) => Promise<void>;
  deleteUser: (id: string, name: string) => Promise<void>;
  updateUser: (id: string, user: Users) => Promise<void>;
}
export const UserContext = createContext<userContextValue>({
  users: [],
  createUser: async () => {},
  deleteUser: async () => {},
  updateUser: async () => {},
});

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState<UsersResponse[]>([]);

  useEffect(() => {
    getUserRequest()
      .then((resp) => setUsers(resp.data))
      .catch((err) => console.log(err));
  }, []);

  const createUser = async (user: Users) => {
    const res = await createUserRequest(user);
    const data = await res.json();
    console.log(res);
    if (res.status === 201) {
      setUsers([...users, data]);
      Swal.fire("Usuario creado exitosamente", "", "success");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ha ocurrido un error al crear el usuario.",
      });
    }
  };

  const deleteUser = async (id: string, name: string) => {
    const user = users;
    console.log(user);
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      html: `<p>Estás a punto de eliminar a <span style="color: blue;">${name}</span>.</p><p>Esta acción eliminará al usuario permanentemente.</p>`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      const res = await deleteUserRequest(id);
      console.log(res);
      if (res.status === 200) {
        setUsers(users.filter((user) => user.id !== id));
      }
    }
  };
  const updateUser = async (id: string, user: Users) => {
    const response = await updateUserRequest(id, user);
    const data = await response.json();
    // setUsers(
    //   users.map((user) =>
    //     user.id === users.i? { ...st, ...data } : st
    //   )
    // );
  };

  return (
    <UserContext.Provider
      value={{
        users,
        createUser,
        deleteUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
