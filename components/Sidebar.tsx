"use client";

import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaHome, FaProjectDiagram, FaUser } from "react-icons/fa";
import { Fahkwang } from "next/font/google";

import Link from "next/link";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(true);
  const { data: session, status } = useSession();

  const iconStyle = {
    transition: "transform 0.4s ease",
    transform: isOpenMenu ? "rotate(180deg)" : "rotate(0)",
  };
  console.log(session?.user.role[0]);

  return (
    <>
      <section className=" flex h-screen">
        <div
          className={` flex text-white relative flex-col  bg-sidebarbgColor  ${
            isOpenMenu ? "expanded" : "collapsed"
          }`}
        >
          <div
            className={`absolute  text-white bottom-[10vh] right-0  `}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <FiChevronRight size={50} style={iconStyle} />
          </div>

          <nav className="mt-20 flex flex-col gap-4   ">
            {session?.user.role[0] === "admin" && (
              <Link
                className="flex pl-3  items-center gap-4 hover:bg-[#C1BBBA] "
                href={"/dashboard"}
              >
                <FaUser size={35} />{" "}
                <h3 className={`${isOpenMenu ? "block" : "hidden"}`}>Admin</h3>
              </Link>
              
              )}
              <hr /> 

            <Link
              className="flex pl-3  items-center gap-4 hover:bg-[#C1BBBA] "
              href={"/dashboard/home"}
            >
              <FaHome size={35} />
              <h3 className={`${isOpenMenu ? "block" : "hidden"}`}>home</h3>
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
