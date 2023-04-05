//import logo from './logo.svg';
import './App.css';
import ListItems from './Listitems.js';
import React, { Component } from 'react'
import {  library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key:''
      }
    }
    // bind the elements to the constructor by bind function 
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem)
    if(newItem.text !==""){
      const newItems = [...this.state.items, newItem];
      this.setState ({
        items: newItems,
        currentItem:{
          text : '',
          key: ''
        }
      })
    }
  }
  deleteItem(key){
    const filterItems=this.state.items.filter(item=>item.key!==key);
    this.setState({
      items: filterItems,
    })
  }
   setUpdate(text,key){
     const items=this.state.items;
     items.map(item=>{
      if(item.key===key){
        item.text=text
      }
     })
   } 
  render() {
    return (
      <div className='App'>
      <header>
        <form id='to-do-list'  onSubmit={this.addItem} >
            <input type="text" placeholder="Enter Text"
              value={this.state.currentItem.text}
              onChange={this.handleInput}
            />
          <button type='submit'>Add</button>
        </form>
        </header>
        <ListItems items={this.state.items}
         deleteItem={this.deleteItem}
         setUpdate={this.setUpdate}
        > </ListItems>
        </div>
    )
  }
}

export default App
