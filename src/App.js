import Header from "./MyComponents/Header";
import Middle from "./MyComponents/Middle";
import Aboutme from "./MyComponents/Aboutme";


import "./index.css"
import Skillslist from "./MyComponents/Skillslist";
import Projects from "./MyComponents/Projects";
import Form from "./MyComponents/Form";



function App() {
  return (
    <>

      <Middle />
      <Header />
      <Aboutme />
      <Skillslist />
      <Projects />
      {/* <Projectnew /> */}
      <Form  />
{/* <Footer /> */}
    </>
  );
}

export default App;
