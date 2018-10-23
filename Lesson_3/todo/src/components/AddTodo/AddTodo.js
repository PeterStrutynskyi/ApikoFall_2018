import React from 'react';
import PT from 'prop-types';

import './AddTodo.css';


const AddTodo = ({
    value,
    onClick,
    onChangeInput
}) => (
    <div id="custom-addTodo-input">
        <div className="input-group col-md-12">
            <input
              value={value}
              type="text"
              className="form-control input-lg"
              placeholder="What needs to be done?"
              onChange={e => onChangeInput(e.target.value)}
            />
            <span className="input-group-btn">
              <button className="btn btn-info btn-lg" onClick={onClick}>
                  <i className="glyphicon glyphicon-plus"></i>
              </button>
            </span>
        </div>
    </div>
);


AddTodo.propTypes = {
    todo: PT.string,
    onClick: PT.func,
    onChangeInput: PT.func,
};
export default AddTodo;
