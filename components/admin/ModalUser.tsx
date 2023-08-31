import { useUsers } from "@/hooks/useUsers";
import { LoginInterface } from "@/interfaces/loginInterface";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import Swal from "sweetalert2";
interface MyFormValues {
  name: string;
  documentNumber: string;
  password: string;
}
const ModalUser = () => {
  const [showModal, setShowModal] = useState(false);
  const { createUser } = useUsers();
  const onSubmit = async (user: MyFormValues) => {
    // resetform();

    setShowModal(false);
    // console.log({ name, documentNumber, password });
    // await createUserRequest({ name, documentNumber, password });
    // createUser({name,documentNumber,password})

    createUser(user);

    // console.log({ values });
  };
  return (
    <div className="       rounded-lg rounded-b-none  py-5 bg-white">
      {!showModal ? (
        <div>
          <div onClick={() => setShowModal(true)}>
            <CustomButton name="+ Agregar" width="100%" />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Buscar"
              className="border rounded-3xl mr-3 px-3 py-1 mt-1 mb-2  border-buttonBorder"
            />
            <CustomButton
              name="Buscar"
              color="buttonBorder"
              textColor="white"
            />
          </div>
        </div>
      ) : null}

      {showModal && (
        <div className=" fixed   left-0 top-0  flex     items-center justify-center bg-opacity-90  bg-gray-300 h-full w-full overflow-y-auto overflow-x-hidden outline-none">
          <div className="  transition-shadow bg-white rounded-md   px-6 py-6     shadow-xl  ">
            <h3>Crear Usuario</h3>
            <Formik
              initialValues={{
                name: "",
                documentNumber: "",
                password: "",
              }}
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
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  Dni
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="documentNumber"
                  placeholder="78459865"
                />
                <label className="block text-start text-gray-700 text-sm font-bold mb-2">
                  Contraseña
                </label>
                <Field
                  className="shadow appearance-none border rounded w-full sm:w-96 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  name="password"
                  placeholder="************"
                />

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
      )}
    </div>
  );
};

export default ModalUser;
