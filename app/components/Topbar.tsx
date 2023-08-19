import React from 'react'

const Topbar = () => {
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
            <span className="text-sm">Usuario</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Topbar