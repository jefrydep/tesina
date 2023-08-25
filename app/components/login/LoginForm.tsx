"use client";

import { LoginInterface } from "@/app/interfaces/loginInterface";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
const initialValues = {
  documentNumber: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  cidusuario: Yup.string().required("Usuario es requerido"),
  ccpassword: Yup.string().required("Contraseña es requerida"),
});
const LoginForm = () => {
  const handleSubmit = ({ documentNumber, password }: LoginInterface) => {
    console.log(documentNumber, password);
  };
  return (
    <div className="z-20 absolute top-20  w-full flex px-3  justify-center">
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className="bg-slate-100 shadow-md rounded-lg md:grid md:grid-cols-2 w-full  md:w-[40rem]   ">
          <div className="bg-orange-400 hidden md:block rounded-l-lg p-5 lg:flex   items-center  "><p className="text-white text-center">
          "¡Bienvenido de nuevo! Estamos emocionados de tenerte de regreso en nuestra App Inmobiliaria. Ingresa para explorar propiedades y seguir tu búsqueda del hogar perfecto."
            </p></div>
          <div className="flex flex-col gap-4 p-5">
            <h2>Iniciar sesion</h2>
            <label className="text-orange-500 font-bold"> Usuario</label>
            <Field
              className="rounded-3xl px-3 py-1 border border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 text-gray-500  "
              type="text"
              name="documentNumber"
              placeholder="45785648"
            />
            <ErrorMessage
              name="documentNumber"
              component="div"
              className="text-red-500 font-bold"
            />
            <label className="text-orange-500 font-bold">Contraseña</label>
            <Field
              className="rounded-3xl px-3 py-1 border border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 text-gray-500  "
              type="password"
              name="password"
              placeholder="**********"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 font-bold"
            />
            <button className="border-2 font-bold  border-gray-500 hover:border-orange-400 rounded-3xl px-2 py-1 hover:text-white hover:bg-orange-400 shadow-sm bg-white">
              Enviar
            </button>
            <h3>
              ¿olvidaste tu contraseña? <span>Comunícate con un</span>{" "}
              <span className="text-orange-600 ">Administrador</span>
            </h3>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
