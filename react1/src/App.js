import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    }
  }
  updateInput(key,value){
    //update react state
    this.setState({
      [key]:value
    });
  }
  addItem(){
    //create item with unique id
    const newItem ={
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };
    //copy of current List of items
    const list =[...this.state.list];
  
    //add new item to list
    list.push(newItem);

    //update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    });
  }
  deleteItem(id){
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updateList = list.filter(item => item.id !== id);

    this.setState({list: updateList})
  }

 render(){

   return (
      <div>
        <div className="black-nav">
          <span>TodoList</span>
        </div>
        <input 
            className="input_item"
            type="text" 
            placeholder="Write Todo"
            value={this.state.newItem}
             onChange={e => this.updateInput("newItem", e.target.value)}
           />
             <button
             className="add_btn"
             onClick={() => this.addItem()}
             >Add</button><br/>
             <ul>
               {this.state.list.map(item =>{
                 return(
                   <li key={item.id}>
                     {item.value}
                     <button
                     className="delete_btn"
                      onClick={() => this.deleteItem(item.id)}
                     >X</button>
                   </li>
                 )
               })}
             </ul>
      </div>
    );
    
  }
 }
export default App;



