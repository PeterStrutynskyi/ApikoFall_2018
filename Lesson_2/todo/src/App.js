import React, { Component } from 'react';
import Header from "./components/Header/Header";
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Filters from './components/Filters/Filters';
import { createTodo } from './utils/creators';
import { FILTERS } from "./components/Filters/types";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: '',
      todos: JSON.parse(localStorage.getItem("todos")) || [],
      filter: FILTERS.SHOW_ALL
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleTodoRemoveClick = this.handleTodoRemoveClick.bind(this);
    this.handleFilterCheck = this.handleFilterCheck.bind(this);
  }

  onChangeInput(newTodo) {
    this.setState({ newTodo })
  }

  handleAddTodo() {
    const { newTodo, todos } = this.state;
    const todo = createTodo(newTodo);

    if(newTodo.trim().length !== 0) {
        this.setState({
            newTodo: '',
            todos: [...todos, todo]
        });
        localStorage.setItem("todos", JSON.stringify([...todos, todo]));
    }
  }

  handleTodoClick(id){
      const { todos } = this.state;

      const currentTodoIndex = todos.findIndex(i => i.id === id);

      if (currentTodoIndex !== -1) {
          const todo = { ...todos[currentTodoIndex] };
          todo.isCompleted = !todo.isCompleted;

          const updatedTodos = [...todos];
          updatedTodos[currentTodoIndex] = todo;

          this.setState({
              todos: updatedTodos
          });

          localStorage.setItem("todos", JSON.stringify(updatedTodos));
      }
  }

  handleTodoRemoveClick(id){
      const { todos } = this.state;

      this.setState({
          todos: todos.filter(i => i.id !== id)
      });
      localStorage.setItem("todos", JSON.stringify(todos.filter(i => i.id !== id)));
  }

  handleFilterCheck(filterType){
    this.setState({
      filter: filterType
    });
  }


  filterTodos(todos, filter){
    switch (filter) {
      case FILTERS.SHOW_ALL: return todos;
      case FILTERS.SHOW_COMPLETED: return todos.filter(todo => todo.isCompleted);
      case FILTERS.SHOW_INCOMPLETED: return todos.filter(todo => !todo.isCompleted);
    }
  }


  render() {
     const { newTodo, todos, filter } = this.state;

      return (
          <div>
              <Header text="Simple React-ToDo App"/>

              <div className="row">
                  <div className="col-md-6 col-md-offset-3">
                      <AddTodo
                          value={ newTodo }
                          onChangeInput={this.onChangeInput}
                          onClick={this.handleAddTodo}
                      />

                      <Filters
                          onFilterCheck={this.handleFilterCheck}
                          currentFilter={filter}
                      />

                      <TodoList
                          todos={this.filterTodos(todos, filter)}
                          onTodoClick={this.handleTodoClick}
                          onTodoRemoveClick={this.handleTodoRemoveClick}
                      />
                  </div>
              </div>
          </div>
    );
  }
}

export default App;
