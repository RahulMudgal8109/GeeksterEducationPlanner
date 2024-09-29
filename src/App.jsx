import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp from './component/Comp'

function App() {
  const [text, setText] = useState("");
  const [num, setNum] = useState();
  const [data,setData]=useState([]);
  // console.log(data);

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      setData(JSON.parse(storedData)); // Parse the JSON string to an array
    }
  }, []);


  const generateOutput=(text,num)=>{
    let newData=[...data,{text:text,num:num}];
    
   
    setData([...data,{text:text,num:num}])
    localStorage.setItem("data",JSON.stringify(newData))
  }
  const handlePlusMinus = (value,index) => {
    let newData=[...data];
    if(value==="+")
    {
      newData[index].num=Number(newData[index].num) + 1;

    }
    else if(value==="-")
    {
      if(Number(newData[index].num)>0)
      {
        newData[index].num=Number(newData[index].num) - 1;

      }
      
    }
    setData(newData)
    localStorage.setItem("data",JSON.stringify(newData))
     
  };
 
    

  return (
    <>
    <h3>Geekster Education Planner</h3>
    <div className="inputSection">
      <input type="text" placeholder='Subject' className="text" value={text} onChange={(e)=>{
        setText(e.target.value)
      }}/>
      <input type="number" placeholder='Hours' className="number" value={num} onChange={(e)=>{
        setNum(e.target.value)
      }}/>
      <button className="add" onClick={()=>{
        generateOutput(text,num);
      }}>Add</button>
    </div>
    {
      data.map((items,index)=>{
        return <Comp text={items.text} num={items.num} key={index} onclick={handlePlusMinus} index={index}/>

      })
     }
      
    </>
  )
}

export default App
