import Header from "./MyComponents/Header";
import Middle from "./MyComponents/Middle";
import Aboutme from "./MyComponents/Aboutme";
import BottomNavbar from "./MyComponents/BottomNavbar";

import "./index.css"

import Projects from "./MyComponents/Projects";
import Form from "./MyComponents/Form";



function App() {
  return (
    <>

      <Middle />
      {/* <Header /> */}
      
      <Aboutme />
     
      <Projects />
     
      <Form  />
{/* <BottomNavbar /> */}
    </>
  );
}

export default App;
