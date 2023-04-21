import React from "react";

const Skillslist = () => {
  return (
    <>
      <body>
        <div class="skills-div max-w-2xl mx-auto text-center">
          <h1 class="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            <a className="underline-effect" href="#">
              Skills
            </a>
          </h1>
        </div>
        <br></br>
        <div class="flex flex-wrap justify-center mt-3 mb-6 items-center gap-4">
          <button class="skills-btn bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            HTML
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
          </button>
        </div>

        <br></br>

        <br></br>


      </body>
    </>
  );
};

export default Skillslist;
