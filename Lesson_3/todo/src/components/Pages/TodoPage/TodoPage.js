import React, { Component } from 'react';
import * as queryString from "query-string";

import { FILTERS } from "../../../constants/filterTypes";
import { createTodo } from "../../../utils/creators";

import AddTodo from "../../AddTodo/AddTodo";
import Filters from "../../Filters/Filters";
import TodoList from "../../TodoList/TodoList";


class TodoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: '',
      todos: this.getStorageData(),
      filter: FILTERS.SHOW_ALL
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleTodoRemoveClick = this.handleTodoRemoveClick.bind(this);
    this.handleFilterCheck = this.handleFilterCheck.bind(this);
    this.getStorageData = this.getStorageData.bind(this);
  }

  getStorageData () {
    try {
      return JSON.parse(localStorage.getItem("todos"));
    }
    catch (e) {
      return [];
    }
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

    }
  }

  handleTodoRemoveClick(id){
    const { todos } = this.state;

    this.setState({
      todos: todos.filter(i => i.id !== id)
    });
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


  componentDidMount () {
    const { location } = this.props;

    let searchParams = queryString.parse(location.search);

    if (searchParams.filter) {
      for (let fl in FILTERS) {
        if (searchParams.filter.toUpperCase() === FILTERS[fl]) {
          this.setState({
            filter: searchParams.filter.toUpperCase()
          });
        }
      }
    }

    window.scrollTo(0, 0);
  }


  componentDidUpdate() {
    const { todos } = this.state;

    localStorage.setItem("todos", JSON.stringify(todos));


  }


  render() {
    const { newTodo, todos, filter } = this.state;

    return (
      <div>
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
    );
  }
}


export default TodoPage;