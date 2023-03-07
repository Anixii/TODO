
import './App.css';
import React from 'react'; 
import Form from './components/Form'; 
import Main from './components/Main';
import Done from './components/Done'; 
class App extends React.Component{   
  state = {  
    
    list:[ 
      
    ],  
    done : [],
    newElem: 'a'
  }
   
  deleteTask=(id) =>{  
    const list = this.state.list.concat() 
    list.splice(id, 1) 
    this.setState({list})
  }   
  deleteDone = (id) =>{  
    debugger
    const done = this.state.done.concat() 
    done.splice(id, 1) 
    this.setState({done})
  }
   
  onCheckbox = (id, arg) =>{   
    const list = this.state.list.concat() 
    list.splice(id, 1) 
    this.setState({list})

    let newList = { 
      title: arg,
    } 
    const doneList = this.state.done 
    doneList.push(newList) 
    this.setState({done : doneList})
  }
  
  addTask = () =>{  
            
  let newPost = { 
  title: this.state.newElem, 
  }   
  const newList = this.state.list
  newList.push(newPost) 
  this.setState({list : newList})
}
  updatePost = (arg) =>{ 
    let newOne = this.state.newElem 
     newOne = arg 
     this.setState({newElem: newOne})
  }   
  inputCheck = () =>{ 

  }
  render(){ 
    return( 
      <div className='App'>   
        <Form onChange={this.change} name={this.state.newElem} updatePost={this.updatePost} addTask={this.addTask}/> 
      <div className='todo'>
        <div className='container'> 
        <h1 className='title'>Планируемые Задачи:</h1>
        {this.state.list.map((task, index) => {  
          
          return( 
            <Main 
            del={this.deleteTask} 
            id = {index} title={task.title} onCheckbox={this.onCheckbox} />
          )
        })}    
        </div>
        <div className='container'> 
        <h1 className='title'>Выполненные задачи:</h1>
       {this.state.done.map((task, index) => {  
          
          return( 
            <Done del={this.deleteDone}
            id={index} done={task.title}/>
          )
        })}  
        </div>
      </div> 
      </div>
    )
  }
} 


export default App;
