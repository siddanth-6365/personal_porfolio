import React from 'react'

const styleimg = {
    height: "550px",
    width: "700px",
}
const divstyle = {
    height: '400px',
}

const iconstyle = {
    width: "40px",
    height: "40px"
}

// const fixediconstyle = {
//     width: "60px",
//     height: "60px"
// }


const styleimg2 = {
    height: "400px",
    width: "400px",

}




const Projects = () => {
    return (
        <>

            <div className="w-screen h-auto flex flex-col justify-center ">
                <div className="text-center" id='project-area' >
                    <h1 class="text-5xl  font-bold leading-tight text-center tracking-tight  text-gray-900 max-sm:text-3xl dark:text-white">
                        <p class="underline-effect" href="#">
                            Projects
                        </p>
                    </h1>
                    <p className='text-blue-700 font-semibold text-xl mt-4 mb-2'> Here you will find some of the personal and clients projects that I created with each project containing its own case study </p>
                    <br></br>
                </div>



                {/* project div  */}
                <div class="project-div min-w-screen  mt-4 flex items-center lg:p-10 overflow-hidden relative">

                    <div class="card-2  sm:w-4xl  max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                        <div class="card-content ">

                            {/* netflix pro div  */}
                            <div class="md:flex  items-center mx-10 lg:mx-0">
                                <div class="w-full">
                                    <div class="img-div relative">
                                        <a href='https://bquh2t-3000.csb.app/' target="_blank" rel="noreferrer noopener">
                                            <img src={require("./assets/proimg1.png")} class="pro1-img w-full relative z-10" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="w-full md:w-1/2 px-2 md:px-10">
                                    <div class="mb-10">
                                        <div class="flex items-center justify-start">
                                            <h1 class="font-bold uppercase text-2xl lg:text-2xl mb-5">NETFLIX-CLONE </h1>
                                            <p class='space-x-2'>
                                                <a href='https://bquh2t-3000.csb.app/' target="_blank" rel="noreferrer noopener">
                                                    <lord-icon src="https://cdn.lordicon.com/uvqnvwbl.json" trigger="loop" style={iconstyle}></lord-icon>
                                                </a>
                                            </p>
                                        </div>
                                        <p class="text-sm text-gray-600 "> This website was built with React JS framework, styled using Tailwind CSS, and Firebase for authentication using email and password. Currently, I am actively working on the project and constantly improving it to enhance its functionality. I hope you like it. </p>
                                    </div>
                                    <div>
                                        <div>
                                            <div class="inline-block align-bottom">
                                                <a href="https://github.com/siddanth-6365/netflix_clone_basic" target="_blank" rel="noreferrer noopener" class="transition-transform transform hover:scale-125">
                                                    <span class="sr-only">Github</span>
                                                    <svg aria-hidden="true" class="w-8 h-8 text-black" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
                                                        ></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Todo-List project div  */}
                            <div class="md:flex items-center " >
                                <div class="w-full ">
                                    <div class="img-div relative">
                                        <a href='https://bquh2t-3000.csb.app/' target="_blank" rel="noreferrer noopener">
                                            <img src={require("./assets/proimg2.png")} class="pro2-img w-full relative z-10" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="w-full ">
                                    <div class="mb-10">
                                        <div className="flex">
                                            <h1 class="font-bold uppercase text-2xl mb-5">Todo-List</h1>
                                            <p className='space-x-2'>
                                                <a href='https://siddanth-6365.github.io/Todo-List_react/' target="_blank" rel="noreferrer noopener" > <lord-icon
                                                    src="https://cdn.lordicon.com/uvqnvwbl.json"
                                                    trigger="loop"
                                                    style={iconstyle}>
                                                </lord-icon></a>
                                            </p>
                                        </div>

                                        <p class="text-sm text-gray-600 "> This is a basic Todo-list website using frameworks like React js ,bootstrap and localStorage .
                                            In this project in react js i have used JavaScript XML (JSX) , for styling i used bootstrap a CSS framework and for storage i have used a localStorage concept in js which allow you to store and access data without expiration.</p>
                                    </div>

                                    <div class="inline-block align-bottom">
                                        <a href="https://github.com/siddanth-6365/Todo-List_react" target="_blank" class="transition-transform transform hover:scale-125">
                                            <span class="sr-only">Github</span>
                                            <svg
                                                aria-hidden="true"
                                                class="w-8 h-8 text-black"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
                                                ></path>
                                            </svg>
                                        </a>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>

            {/* fixed div  */}

            {/* <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a href='#'  >   <lord-icon
                        src="https://cdn.lordicon.com/xdakhdsq.json"
                        trigger="hover"
                        style={fixediconstyle}>
                    </lord-icon> </a>
                </div>
            </div> */}


        </>
    )
}

export default Projects








