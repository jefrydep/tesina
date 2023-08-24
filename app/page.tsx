import Topbar from "./components/Topbar";
import LoginPage from "./login/page";

export default function Home() {
  return (
    <main className="w-full   rounded-3xl bg-pagebgColor   h-full  ">
      {/* <Topbar /> */}

      <LoginPage />
    </main>
  );
}
