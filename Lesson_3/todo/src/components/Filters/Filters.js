import React from 'react';
import PT from "prop-types";
import { FILTERS } from '../../constants/filterTypes'

import './filters.css';

const Filters = ({
    onFilterCheck,
    currentFilter
}) => {

  const disabled = filterType => {
    return 'btn-space btn '+((filterType === currentFilter) ?'btn-primary':'default');
  };


  return (
      <div className="row">
          <div className="col-md-8 col-md-offset-30 bottom-space">
              <span className="font-weight-light text-uppercase">show: </span>

              <button
                  onClick={() => onFilterCheck(FILTERS.SHOW_ALL)}
                  className={disabled(FILTERS.SHOW_ALL)}> All
              </button>

              <button
                  onClick={() => onFilterCheck(FILTERS.SHOW_INCOMPLETED)}
                  className={disabled(FILTERS.SHOW_INCOMPLETED)}> Incomplete
              </button>

              <button
                  onClick={() => onFilterCheck(FILTERS.SHOW_COMPLETED)}
                  className={disabled(FILTERS.SHOW_COMPLETED)}> Complete
              </button>
          </div>
      </div>
  );
};


Filters.propTypes = {
    onFilterCheck: PT.func,
    currentFilter: PT.string
};

export default Filters;
