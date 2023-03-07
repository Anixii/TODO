import React from "react"
function From (props){   
  
   let newElem = React.createRef() 
    let inputClasses = ['input'] 

let addPost = () => {  
    let text = newElem.current.value 
    if(text !== '') props.addTask()  
    else alert('no')
  
}
let onHandleChange = () =>{ 
    let text = newElem.current.value  
    props.updatePost(text)
 
} 
if(props.name !== ''){ 
    inputClasses.push('green')
} else{ 
    inputClasses.push('red')
}   

if(props.name.length > 5){ 
    inputClasses.push('over')
} 

    return ( 
        <div className="form" >  
        Добавить задачу:
        <input placeholder='Ввести задачу' value={props.name} className={inputClasses.join(' ')} onChange={onHandleChange} ref={newElem}></input>
        <button onClick={addPost} >Добавить задачу</button>     
        </div>
    )
} 
export default From