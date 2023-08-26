"use client";
import React from "react";
import LoginForm from "../../components/login/LoginForm";
import Image from "next/image";
import mision from "../../public/images/mision.png"
import vision from "../../public/images/vision.png"
const LoginPage = () => {
  return (
    <>
      <div className="bg-gradient-to-t    ">
        <div className="bg-orange-400 px-10 text-white py-4 shadow-md font-bold">
           Inmobiiaria Palomino
        </div>
        <div className="   bg-fixed  bg-[url('/images/paisaje.jpg')] h-[95vh] lg:h-[85vh] relative bg-cover  border opacity-80  w-full flex flex-col justify-center items-center">


          <div
            className="   w-full bottom-0 absolute "
            style={{
              height: "150px",
              overflow: "hidden",
            }}
          >
            <svg
              className=" h-full w-full   top-0"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"  
            // style={{}}"height: 100%; width: 100%;"
            >
              <path
                d="M0.00,49.98 C180.86,160.38 295.99,-23.17 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                style={{ stroke: "none", fill: "#E3E3EF" }}
              ></path>
            </svg>
          </div>
        </div>
        <LoginForm />

        <section className="lg:grid bg-pagebgColor flex flex-col px-3 lg:grid-cols-2 lg:px-36">
          <div >
            <Image alt="mision" width={380} height={380} src={mision} priority />
          </div>
          <div className="text-justify">
            <h2 className="text-center font-bold text-3xl">Mision</h2>
            <p className="text-[#2E4053]">

              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis mollitia eligendi optio deserunt sapiente, sarchitecto sint aliquid voluptatum maxime porro! Nobis non ipsam facilis in possimus commodi iste corrupti asperiores.
              Minus, magni ipsa nisi voluptate blanditiis accusantium mollitia fugiat ipsum iste facere vitae quibusdam quis eligendi eius, nostrum ullam? Doloribus neque provident architecto minus eius minima eos quisquam nam ullam.
              Ducimus, exercitationem aspernatur. Tempore, autem? Voluptates maxime doloribus, neque quibusdam suscipit adipisci, facere totam deleniti voluptatem officia voluptate eaque dolor modi quisquam nisi excepturi placeat laudantium id culpa! Suscipit, quam!
              Necessitatibus labore velit aperiam dignissimos ducimus hic quidem dolorum nihil eius quas vel, doloremque distinctio possimus quia praesentium nostrum saepe, accusamus ab ut? Laudantium, dolorem doloribus? Iste tempora exercitationem expedita!

            </p>

          </div>

          <div className="text-justify" >
            <h2 className="text-center font-bold text-3xl">Vision</h2>
            <p className="text-[#154360]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati nam numquam aspernatur sit perferendis sed quisquam quidem atque magni eligendi, dolores modi? Porro in non eligendi minima assumenda. Aspernatur, praesentium!
              Eveniet nostrum delectus, amet consequuntur nihil molestias atque cumque ratione facere similique enim doloribus, error ad. Maiores exercitationem, quod sed quisquam facilis obcaecati, cumque rem perferendis at dolore, voluptatum delectus.
              Molestiae omnis illum eos repellendus animi hic vero consectetur, illo recusandae eum, voluptas, inventore distinctio provident laudantium nisi reiciendis totam. Voluptas dolore corrupti cumque tempora alias explicabo omnis aliquam! Officiis?
              Ad neque dolorem sint eaque doloremque recusandae officiis dolorum beatae quidem, consequuntur obcaecati tenetur reiciendis odit molestias numquam molestiae magni, debitis at maxime hic! Tempora, veniam corrupti. Distinctio, iure autem.</p>
          </div>
          <div className="flex justify-center">

            <Image alt="vision" width={380} height={380} src={vision} priority />
          </div>

        </section>
      </div>
    </>
  );
};

export default LoginPage;
