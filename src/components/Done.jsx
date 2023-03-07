import delImage from '../delete.png'
 function Done(props){  
    const deleteA = ()=> {  
      
        props.del(props.id)  
       
    } 
    return( 
        <div>  
            
        <div className="tasks">
            {props.done} 
            <button className='delete' onClick={deleteA} ><img className='image' src={delImage} alt="" /></button>
        </div> 
        </div>
    )
} 
export default Done