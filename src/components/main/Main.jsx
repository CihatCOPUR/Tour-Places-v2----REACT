import "./main.css"
import data from "./data2"




 const Main = () => {

  return (
    <div className="main">
    {data.map((item)=>{
        return(
            <marquee  key={item.id}> 
          
            <img className="top" src={item.image} alt={item.title} />
            
          
            </marquee>) }
           )}

          
          </div>
            
            

       
   
  )
}
export default Main;