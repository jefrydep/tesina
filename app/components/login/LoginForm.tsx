"use client";

import { LoginInterface } from "@/app/interfaces/loginInterface";
import { Field, Form, Formik } from "formik";
const initialValues = {
  usuario: "",
  password: "",
};
const LoginForm = () => {
  const handleSubmit = ({ usuario, password }: LoginInterface) => {
    console.log(usuario, password);
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="bg-slate-100 shadow-md rounded-lg md:grid md:grid-cols-2   md:w-[40rem]   ">
          <div className="bg-orange-400 rounded-l-lg p-5">conten</div>
          <div className="flex flex-col gap-4 p-5">
            <h2>Iniciar sesion</h2>
            <label className="text-orange-500 font-bold"> Usuario</label>
            <Field
              className="rounded-3xl px-3 py-1 border border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 text-gray-500  "
              type="text"
              name="usuario"
              placeholder="45785648"
            />
            <label className="text-orange-500 font-bold">Contraseña</label>
            <Field
              className="rounded-3xl px-3 py-1 border border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 text-gray-500  "
              type="password"
              name="password"
              placeholder="**********"
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
