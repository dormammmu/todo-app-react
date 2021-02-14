import React from "react"



const ToDolists = (props)=>{




    return (
        <>
            <div>
                    <li>
                         {props.text}
                         <button
                         onClick ={()=>
                                props.onSelect(props.id)
                        
                        }
                         >
                             X
                         </button>
                         <button
                            onClick = {()=>
                               props.onStrike(props.id)   
                            }
                         
                         >
                             O
                         </button>
                      </li>
            </div>
          </>
      )
}
export default ToDolists