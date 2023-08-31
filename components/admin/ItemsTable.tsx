import { useUsers } from "@/hooks/useUsers";
import { MdDeleteForever, MdDriveFileRenameOutline } from "react-icons/md";
interface tableProps {
  name: string;
  status: boolean;
  rol: string;
  id: string;
}

const ItemsTable = ({ name, status, rol, id }: tableProps) => {
  const { deleteUser } = useUsers();
  return (
    <div className="grid grid-cols-4 rounded-2xl mx-3 px-3 py-1  text-white font-semibold bg-blue-200">
      <div>{name}</div>
      <div>{status}</div>
      <div>{rol}</div>
      <div className="flex text-white gap-6">
        <div className="rounded-full w-10 h-10      hover:bg-green-400 inline-block cursor-pointer ">
          <MdDriveFileRenameOutline color={"white"} size={35} />
        </div>
        <div
          onClick={() => deleteUser(id,name)}
          className=" rounded-full w-10 h-10      hover:bg-red-400 inline-block cursor-pointer  "
        >
          <MdDeleteForever color={"white"} size={35} />
        </div>
      </div>
    </div>
  );
};

export default ItemsTable;
