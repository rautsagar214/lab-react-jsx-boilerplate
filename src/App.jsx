import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

let data = imageData()


function App() {
  
  let galleryStyle = {
    textAlign:"center"
  }
  let styleMyDiv = {
    display:"grid",
    gridTemplateColumns:"48.5% 48.5%",
    gridGap:"1%"
  }
  return(
  <>
    <h1 style={galleryStyle}>Kalvium Gallery</h1>

    {/* <div style={styleMyDiv}>
      <img src={data[0].img} alt="" width={"200px"} />
      <img src={data[1].img} alt="" width={"200px"} />
      <img src={data[2].img} alt="" width={"200px"} />
      <img src={data[3].img} alt="" width={"200px"} />
      
    </div> */}

    <div style={styleMyDiv}>
      {data.map((el)=>(
        <div key={el.id}>
       <img src={el.img} width={"100%"} />
      </div>
      ))}
   </div>
    </>
  )
}

export default App;
