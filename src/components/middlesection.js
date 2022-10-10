import img1 from "./img/middle.webp"


const Middle = ()=>{
    return (
        <div className="middle">
            <img src={img1} alt="middle-piçture" />
            <input type="text" className="input" placeholder="  Where are you going?" />
            <p>Discover unforgetteble <br /> travel experiences</p>
        </div>
    )
}

export default Middle;