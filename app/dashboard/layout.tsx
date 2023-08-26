import Sidebar from "../../components/Sidebar";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
       <div className="flex bg-black">
        <Sidebar/>
        {children}
       </div>
    );
  }