import { Field } from "formik"
import Topbar from "../../../components/Topbar"
import CustomButton from "@/components/ui/CustomButton"



const AdminPage = () => {
  return (
    <div className='w-full  rounded-3xl bg-pagebgColor h-screen '>
      <Topbar />
      <div className="bg-white   p-5 flex justify-around">
        <h3>Lista de creditos </h3>
        <div className="flex gap-5 border p-5 rounded-lg">
          <div className="">
            <h4 className="text-gray-400">Total</h4>
            <span className="text-sidebarbgColor">225 Lotes</span>

          </div>
          <div>
            <h4 className="text-gray-400 ">Disponibles</h4>
            <span className="text-orange-400">125</span>

          </div>
          <div>
            <h4 className="text-gray-400">Ventas de hoy</h4>
            <span className="text-green-500">25</span>

          </div>
        </div>
      </div>
      <section className="bg-white mt-3 pt-4">
        <div className="flex gap-3  ">

          <input className="border rounded-3xl border-buttonBorder px-3 py-1 mt-1 mb-2" name="search" type="text" placeholder="Dni" />

          <CustomButton name="Buscar" />
        </div>

      </section>
    </div>
  )
}

export default AdminPage