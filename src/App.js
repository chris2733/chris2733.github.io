import React, { Component } from 'react';
import Header from './components/layout/header';
import Todos from './components/Todos';
import FilterAll from './components/FilterAll';
import Filter1 from './components/Filter1';
import Filter2 from './components/Filter2';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Button 1",
        content: 'Button',
        completed: false,
        typeF: "type1",
        hidden: false,
        classN: 'slide1',
        codepen: '',
      },
      {
        id: 2,
        title: "Button 2",
        content: 'Button',
        completed: false,
        typeF: "type1",
        hidden: false,
        classN: 'slide2',
        codepen: '',
      },
      {
        id: 3,
        title: "Button 3",
        content: 'Button',
        completed: false,
        typeF: "type1",
        hidden: false,
        classN: '',
        codepen: '',
      },
      {
        id: 4,
        title: "Button 4",
        content: 'Button',
        completed: false,
        typeF: "type1",
        hidden: false,
        classN: '',
        codepen: '',
      },
      {
        id: 5,
        title: "Button 5",
        content: 'Button',
        completed: false,
        typeF: "type2",
        hidden: false,
        classN: '',
        codepen: '',
      },
      {
        id: 6,
        title: "Button 6",
        content: 'Button',
        completed: false,
        typeF: "type2",
        hidden: false,
        classN: '',
        codepen: '',
      },
    ]
  }
  filterChange = (typeofit) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if (typeofit === "typeall") {
        todo.hidden = false;
      }
      else if (todo.typeF !== typeofit ) {
        todo.hidden = true;
      }
      else {
        todo.hidden = false;
      }
      return todo;
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="filterbuttons-wrap">
          <FilterAll filterChange={this.filterChange}/>
          <Filter1 filterChange={this.filterChange}/>
          <Filter2 filterChange={this.filterChange}/>
        </div>
        <div className="todo-item-wrap">
          <Todos todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
