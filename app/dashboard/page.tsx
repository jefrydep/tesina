import React from "react";
import Topbar from "../components/Topbar";

const Dashboard = () => {
  return (
    <div className="w-full  rounded-3xl bg-pagebgColor h-screen">
      <Topbar />
      <section>
        <div className="bg-white h-96 mt-3 rounded-2xl mx-3">mi content</div>
      </section>
    </div>
  );
};

export default Dashboard;
