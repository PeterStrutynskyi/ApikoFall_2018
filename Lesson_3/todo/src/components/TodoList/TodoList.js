import React from 'react';
import PT from 'prop-types';

import TodoItem from '../TodoItem/TodoItem';


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