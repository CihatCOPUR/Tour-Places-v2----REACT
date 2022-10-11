



import Data from "./components/Data"

import Middle from "./components/middlesection";
import Navbar from "./components/navbar";
import Content from "./components/Content";
function App() {

  return (
  <div>
    <Navbar/>
    <Middle/>
   <div className="container">{Data.map((item)=>{
    return(<Content title={item.title} image={item.image} desc={item.desc}/>);
   })}</div> 
   
   
  </div>
  );
}

export default App;


