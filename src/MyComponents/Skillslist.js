import React from "react";


const skillsicon = {
  fontSize: "4rem",
  //  color:"blue"
}
const tailwindicon = {
  height: "60px",
  width: "50px",
}

const Skillslist = () => {
  return (
    <>
      <body>
        <div class="skills-div max-w-2xl mx-auto text-center">
          <h1 class="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl ">
            <a className="underline-effect" href="#">
              Skills
            </a>
          </h1>
        </div>
        <br></br>
        <div class="flex flex-wrap justify-center space-x-4   mt-3 mb-6 items-center gap-4">


          <li>
            <i class="fa-brands fa-html5 " style={skillsicon}>
            </i>
            <p>HTML</p>
          </li>
          <li>
            <i class="fa-brands fa-css3-alt " style={skillsicon} ></i>
            <p>CSS</p>
          </li><li>
            <i class="fa-brands fa-js " style={skillsicon} ></i>
            <p>JavaScript</p>

          </li>

          <li>
            <i class="fab fa-c " style={skillsicon} ></i>
            <p>C/C++</p>
          </li>
          <li>
            <i class="fa-brands fa-node" style={skillsicon}></i>
            <p>Node js</p>
          </li>
          <li>
            <i class="fa-brands fa-react" style={skillsicon}></i>

            <p>React js</p>
          </li>
          <li>
            <i class="fas fa-database" style={skillsicon}></i>
            <p>MySql</p>
          </li>
          <li>
            <i class="fab fa-github" style={skillsicon}></i>

            <p>Git/GitHub</p>
          </li>

          <li>
            <svg role="img" viewBox="0 0 24 24" style={tailwindicon} xmlns="http://www.w3.org/2000/svg"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" /></svg>
            <p>Tailwind CSS</p>
          </li>




          {/* <button class="skills-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          </button>
          <button class="skills-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            CSS
          </button>
          <button class="skills-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">
            JavaScript
          </button>
          <button class="skills-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            C/C++
          </button>
          <button class="skills-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-1 rounded">
            React JS
          </button>
          <button class="skills-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Node JS
          </button>
          <button class="skills-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            MYSQL
          </button>
          <button class="skills-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">
            GIT/GITHUB
          </button>
          <button class="skills-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded">
            Tailwind CSS
          </button> */}
        </div>

        <br></br>

        <br></br>


      </body>
    </>
  );
};

export default Skillslist;
