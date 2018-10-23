import React from "react";
import { Link } from "react-router-dom";

import {routes} from '../../routes'



const Sidebar = () => (

  <div style={{
    padding: "10px",
    width: "150px",
  }}>
    <div className="panel panel-default">
      <div className="panel-heading">Menu</div>
      <div className="panel-body">
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <Link to={routes.home}>Todos</Link>
          </li>
          <li>
            <Link to={routes.about}>About</Link>
          </li>
          <li>
            <Link to={routes.help}>Help</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Sidebar;