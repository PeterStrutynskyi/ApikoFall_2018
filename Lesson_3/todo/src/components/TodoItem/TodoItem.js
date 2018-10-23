import React from 'react';
import PT from "prop-types";

import classNames from 'classnames/bind';
import styles from './ToDoItem.css';

let cx = classNames.bind(styles);


const TodoItem = ({
    id,
    isCompleted,
    task,
    onClick,
    onRemoveClick,
}) => {

  const className = cx('list-group-item', {'list-group-item-warning': !isCompleted,  'list-group-item-success': isCompleted });

  return(
    <li key={ id } className={className}>
      <div className="row vertical-align-center">

        <div className="col-md-10">
          {task}
        </div>
        <div className="col-md-2">
            <button className="btn btn-default btn-space" onClick={() => onClick(id)}>
              <i className="glyphicon glyphicon-ok"></i>
            </button>

            <button className="btn btn-danger btn-space" onClick={() => onRemoveClick(id)}>
              <i className="glyphicon glyphicon-remove"></i>
            </button>
        </div>
      </div>
    </li>
  );
};


TodoItem.propTypes = {
    id: PT.string,
    completed: PT.bool,
    task: PT.string,
    onClick: PT.func,
    onRemoveClick: PT.func
};

export default TodoItem;
