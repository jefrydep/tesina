import { useUsers } from "@/hooks/useUsers";
import { MdDeleteForever, MdDriveFileRenameOutline } from "react-icons/md";

import { useState } from "react";
import ModalUpdate from "./ModalUpdate";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { UsersResponse } from "@/interfaces/usersResponse";
interface MyFormValues {
  name: string;
  documentNumber: string;
  password: string;
}
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Usuario es requerido"),
  documentNumber: Yup.string()
    .required("Documento es requerido")
    .min(8, "El número de documento debe tener al menos 8 caracteres")
    .max(8, "El número de documento debe tener como máximo 8 caracteres"),
  password: Yup.string()
    .required("La contraseña debe tener mayusaculas y numeros")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)/,
      "La contraseña debe contener al menos una mayúscula y un número"
    ),
});
interface tableProps {
  name: string;
  status: boolean;
  rol: string;
  id: string;
  password: string;
  documentNumber: string;
}

const ItemsTable = ({
  name,
  status,
  rol,
  id,
  documentNumber,
  password,
}: tableProps) => {
  const [showModal, setShowModal] = useState(false);
  const { deleteUser, updateUser } = useUsers();

  const onSubmit = async (user: MyFormValues) => {
    // resetform();

    setShowModal(false);
    updateUser(id, user);
    // console.log({ name, documentNumber, password });
    // await createUserRequest({ name, documentNumber, password });
    // createUser({name,documentNumber,password})

    // console.log({ values });
  };
  return (
    <div className="grid grid-cols-4 border  border-blue-300  items-center rounded-2xl mx-3 px-3 py-1  text-blue-500 font-semibold bg-blue-50">
      <div>{name}</div>
      <div>{status}</div>
      <div>{rol}</div>
      <div className="flex text-white gap-6">
        <div
          onClick={() => setShowModal(true)}
          className="rounded-full w-10 h-10      hover:bg-green-400 inline-block cursor-pointer "
        >
          <MdDriveFileRenameOutline color={"white"} size={35} />
        </div>
        <div
          onClick={() => deleteUser(id, name)}
          className=" rounded-full w-10 h-10      hover:bg-red-400 inline-block cursor-pointer  "
        >
          <MdDeleteForever color={"white"} size={35} />
        </div>
      </div>
      <ModalUpdate isOpen={showModal}>
        <div className=" fixed   left-0 top-0  flex     items-center justify-center bg-opacity-90  bg-gray-300 h-full w-full overflow-y-auto overflow-x-hidden outline-none">
          <div className="  transition-shadow bg-white rounded-md   px-6 py-6     shadow-xl  ">
            <h3>Crear Usuario</h3>
            <Formik
              initialValues={{
                name: `${name}`,
                documentNumber: `${documentNumber}`,
                password: `${password}`,
              }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="flex flex-col gap-2">
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  Usuario
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  placeholder="Jefry Palomino"
                />
                <div className="mb-3">
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 font-bold"
                  />
                </div>
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  Dni
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="documentNumber"
                  placeholder="78459865"
                />
                <div className="mb-3">
                  <ErrorMessage
                    name="documentNumber"
                    component="div"
                    className="text-red-500 font-bold"
                  />
                </div>
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  Contraseña
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  placeholder="************"
                />
                <div className="mb-3">
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 font-bold"
                  />
                </div>

                <div className="flex gap-4 justify-center mt-4">
                  <button
                    onClick={() => {
                      setShowModal(false);
                    }}
                    className="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Cancelar
                  </button>
                  <button
                    // onClick={() => {
                    //   setShowModal(false);
                    // }}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Enviar
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </ModalUpdate>
    </div>
  );
};

export default ItemsTable;
