import delImage from '../delete.png'
 function Main(props) {  
    const deleteA = ()=> { 
        props.del(props.id)  
       
    } 
    const onChecked = () => {      
        props.onCheckbox(props.id,props.title)
    }
    return(  
        
        <div className="yu">  
        
           <div className="tasks">
            <div><input className="radio-button" onClick={onChecked} type='radio' name='list'/>{props.title} </div>
            <button className="delete" onClick={deleteA}> <img className='image' src={delImage} alt="" /> </button> 
            </div>
          
        </div>
    )
} 
export default Main