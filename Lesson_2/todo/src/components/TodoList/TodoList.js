import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import PT from 'prop-types';


const TodoList = ({
    todos,
    onTodoClick,
    onTodoRemoveClick
}) => (
    <ul className="list-group">
        {
            todos.map(todo => (
                <TodoItem key={todo.id} {...todo} onClick={onTodoClick} onRemoveClick={onTodoRemoveClick}/>
            ))
        }
    </ul>
);


TodoList.propTypes = {
    todos: PT.array,
    onTodoClick: PT.func,
    onTodoRemoveClick: PT.func
};


export default TodoList;