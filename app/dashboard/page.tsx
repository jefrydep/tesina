"use client";
import React from "react";
import Topbar from "../../components/Topbar";
import CustomButton from "@/components/ui/CustomButton";
import ItemsTable from "@/components/admin/ItemsTable";
import { useUsers } from "@/hooks/useUsers";
import ModalUser from "@/components/admin/ModalUser";

const Dashboard = () => {
  const { users } = useUsers();
  console.log(users);
  return (
    <div className="w-full  rounded-3xl bg-pagebgColor h-screen">
      <Topbar />
      <section>
        <div className="bg-white  mt-3 rounded-2xl mx-3 p-3">
          <h3 className="text-2xl font-bold mb-4">Modulo de Usuarios</h3>
          <div className="flex border gap-4 rounded-lg p-3">
            <div className="">
              <h3 className="font-bold text-gray-400 text-lg">
                Total de usuario
              </h3>
              <div className="text-center text-blue-500 font-bold">23</div>
            </div>
            <div>
              <h3 className="font-bold text-gray-400 text-lg">
                Usuarios Activos
              </h3>
              <div className="text-center font-bold text-orange-500">12</div>
            </div>
          </div>
          {/* <CustomButton name="+ Agregar" width="100%" /> */}
          {/* <div>
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
          </div> */}
          <ModalUser />
        </div>
        <div className="bg-white h-[72vh] mt-3 rounded-2xl mx-3  ">
          <div className="bg-sky-800 rounded-t-2xl p-3 mb-2 text-white text-lg grid grid-cols-4">
            <div>Nombre</div>
            <div>estatus</div>
            <div>Rol</div>
            <div>Acciones</div>
          </div>
          <div className="flex flex-col gap-2">
            {users.map((user) => (
              <div key={user.id}>
                <ItemsTable
                  id={user.id}
                  name={user.name}
                  rol={user.role[0]}
                  status={user.isActive}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
