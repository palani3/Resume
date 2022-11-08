import React from "react";
import photo from "./assets/photo.jpg";
// const logo = require('./logo.jpeg);

export default function Resume() {
  return (
    <div>
      {/* justify-center */}

      <div className="flex items-center justify-center mt-3">
        <div className="bg-cyan-900 w-1/8 h-auto p-10 ">
          <div className="flex item-center justify-center mb-10">
            <img className="rounded-full w-36 border-2" src={photo} />
            <br/>
           
          </div>
          <h1 className="text-black-500 text-center text-3xl">Palani k</h1>

          <h1
            className="text-black-400 uppercase tracking-widest text-lg mt-5
        font-bold"
          >
            Contact
          </h1>
          <hr className="mb-6 w-1/6"></hr>         
          <h1 className="text-white text-sm mb-3">Palanik922@gmail.com</h1>
          <h1 className="text-white text-sm mb-3">7676837451</h1>
          <h1 className="text-white text-sm">
            #2/1 2nd 'A' Main Srinivasa <br /> Nagar  
             Bangalore 560050
          </h1>
          <hr className="my-5" />
          <h1
            className="text-black-400 uppercase tracking-widest text-lg
        font-bold"
          >
            Education
          </h1>
          <hr className="mb-5 w-1/6" />
          <h1 className="text-white text-sm font-semibold tracking-wider uppercase">
            Master of Computer Science
          </h1>
          <h1 className="text-black-500 text-sm">
            {" "}
            <span className="italic">
              Visvesvaraya Technological University
            </span>
            ,
            <span className="text-black-400 font-semibold italic">
              Bangalore
            </span>
            / 2016 - 2018{" "}
          </h1>
          <br />

          <h1 className="text-white text-sm font-semibold tracking-wider uppercase ">
            Bachelor of Computer Science
          </h1>
          <h1 className="text-black-500 text-sm">
            {" "}
            <span className="italic">A.P.S College of Arts and Science</span>,
            <span className="text-black-400 font-semibold italic">
              Bangalore
            </span>
            / 2016 - 2018{" "}
          </h1>
          <h1
            className="text-black-400 uppercase tracking-widest text-lg
        font-bold mt-5"
          >
            Skills
          </h1>
          <hr className="mb-5 w-1/6" />
          <ul className="list-disc text-white">
            <li className="text-black-500 text-sm ml-4">HTML</li>
            <li className="text-black-500 text-sm ml-4">CSS</li>
            <li className="text-black-500 text-sm ml-4">Javascript</li>
            <li className="text-black-500 text-sm ml-4">React</li>
            <li className="text-black-500 text-sm ml-4">React-Native</li>
            <li className="text-black-500 text-sm ml-4">Node js</li>
            <li className="text-black-500 text-sm ml-4">Graphql</li>
          </ul>
        </div>

        <div className="bg-white h-auto p-10 w-11/12">
          <h1 className="text-black font-semibold mt-3">About</h1>
          <h1 className="text-black-500">
            dsakdsalkjdlsajldjlasjdlsjaljdsadsad;sjakdjsalkjdlsjjklsjldsaldsjjl
          </h1>
          <h1 className="font-semibold uppercase tracking-wider my-6 text-black-500 capitalize">
          Professional experience
          </h1>


          <h1 className="text-black-600 font-semibold">
          Sn Embedded Systems Private Limited &nbsp;
         Junior FullStack Developer (JAN 2022 – Present)
          </h1>
          <ul className="list-disc ml-5 text-black-500">
            <li>Full stack web development in Frontend and Backend.</li>
            <li>Web application development React js and node</li>
            <li>Mobile Platform Development </li>
          </ul>

          <h1 className="text-black-600 font-semibold mt-3">
          Sneha Enterprises  FullStack Developer (Mar 2021 - Nov 2021 )
          </h1>
          <ul className="list-disc ml-5 text-black-500">
          Roles and Responsibilities
          <li className="pt-3">Full stack web development in Frontend and Backend.</li>
            <li>Web application development React js nad node</li>
            <li>Mobile Platform Development </li>
          </ul>
          <h1 className="text-black-600 font-semibold mt-3">
          Agrata Consulting  FullStack Developer (Feb 2020 - Sept 2020 )
          </h1>
          <ul className="list-disc ml-5 text-black-500">
          Roles and Responsibilities
          <li className="pt-3">Full stack web development in Frontend and Backend.</li>
            <li>Web application development React js nad node</li>
            <li>Mobile Platform Development </li>
          </ul>

          <h1 className="text-black-600 font-semibold my-5">
          Mezora Productions Private Limited &nbsp;
          FullStack Developer, (JAN 2019 – JAN 2020)
          </h1>
          <ul className="list-disc ml-5 text-black-500  "> Roles and Responsibilities
            <li className="pt-3">Full stack web development in Frontend and Backend.</li>
            <li>Web application development (HTML-5, JavaScript, CSS, and PHP).</li>
            <li>Web development using JavaScript library & framework (React JS).</li>
            <li>Software design and architecture.</li>
          </ul>
          
          
         
        </div>
      </div>
    </div>
  );
}
