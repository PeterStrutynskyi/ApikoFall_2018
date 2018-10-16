import React from 'react';
import PT from "prop-types";

import './index.css';

const TodoItem = ({
    id,
    isCompleted,
    task,
    onClick,
    onRemoveClick
}) => {

  const completed = () => isCompleted ? 'list-group-item-success' : 'list-group-item-warning';


  return(
    <li className={`list-group-item ${completed()}`}>
      <div className="row">

        <span className={"col-md-10"}>
          {task}
        </span>
        <span>
            <button className="btn btn-default btn-space" onClick={() => onClick(id)}>
              <i className="glyphicon glyphicon-ok"></i>
            </button>

            <button className="btn btn-danger btn-space" onClick={() => onRemoveClick(id)}>
              <i className="glyphicon glyphicon-remove"></i>
            </button>
        </span>
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
