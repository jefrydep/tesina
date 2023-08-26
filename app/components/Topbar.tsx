"use client"
import { signOut } from 'next-auth/react';



import React, { useState } from 'react'
import Swal from 'sweetalert2';

const Topbar = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <section className=' '>

    <div className="bg-contentbgColor   flex justify-between  border-b   w-full  items-center  rounded-t-3xl h-16">
        <div className="px-2 mx-7 font-bold hidden lg:block">
          !Hola Godofredo Bienvenido Otra Vez!   
        </div>
        <div className="flex   border-l-4 px-2">
          <div className=" bg-sidebarbgColor text-white w-10 h-10 rounded-full">
            J
          </div>
          <div className="   flex flex-col mr-7 ml-3">

            <span className="text-sidebarbgColor">Palomino Mayta Godofredo</span>
             
            <div
                title="Salir"
                className="cursor-pointer  hover    hover:text-red-400 text-blue-500 rounded-xl"
                onClick={async () => {
                  const result = await Swal.fire({  
                    title: "¿Cerrar sesión?",
                    text: "¿Estás seguro?",
                    icon: "warning",
                    showCancelButton: true,
                    customClass:{
                       confirmButton: "sidebarbgColor"
                    },
                    cancelButtonColor: "#d33",
                    confirmButtonText: "¡Si!, ¡Cerrar!",
                    cancelButtonText: "Cancelar",
                  });

                  if (result.isConfirmed) {
                    setIsLoading(true);

                    await signOut({
                      redirect: true,
                    });

                   
                    setIsLoading(false);
                  }
                }}
              >
               salir 
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Topbar