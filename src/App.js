import React from "react"
import ReactDom from "react-dom"
import ToDolists from "./ToDolists"
import "../src/components/sip.css"




const App = ()=>{
  const[item,setItem] = React.useState("");
  const[change,setChange]=React.useState([]);
  const handleChange = (event)=>{
    setItem(event.target.value)
  }
  const handleClick = () =>{
    setChange((oldItems)=>{
      return [...oldItems,item]
    });
    setItem("")
  }
  const handleDelete = (id)=>{
    console.log("DELETED")
    setChange((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
        return index !== id
      })
    })
  }
  const handleStrike = (e)=>{
    console.log("STRIKE")
    setChange((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
        return e.classList.toggle("crossed-line")
      })
    })
  
  }
  const handleClick1 = (e) =>{
    if(e.keyCode == 13){
    setChange((oldItems)=>{
      return [...oldItems,item]
    });
    setItem("")
  }}
  
  
  
  return(
    <>
        <div className = "main_div">
          <div className = "centre_div">
            <br/>
            <h1>ToDo List</h1>
            <br/>
            <input
              type ="text"
              placeholder="ADD ITEMS" 
              value = {item}
              onChange={handleChange}
              onKeyDown={handleClick1}
            />
            <button onClick = {handleClick}>+</button>
            <ol>
              
               
                {change.map((itemval,index)=>{
                  return (
                    <ToDolists
                      key={index}
                      id= {index }
                      text = {itemval}
                      onSelect = {handleDelete}
                      onStrike = {handleStrike}
                    />
                  )
                })}
              
            </ol>

          </div>
        </div>




    </>



  )
}
export default App