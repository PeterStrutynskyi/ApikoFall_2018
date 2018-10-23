import React from 'react';
import { Route } from "react-router-dom";
import { routes } from "./routes";


import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import { Help } from "./components/Pages/HelpPage/Help";
import { About } from "./components/Pages/AboutPage/About";
import  TodoPage   from "./components/Pages/TodoPage/TodoPage";


const App = () => (
          <div className="container">
              <Header text="Simple React-ToDo App"/>
              <div className="row">
                  <div className="col-md-3">
                    <Sidebar />
                  </div>

                  <div className="col-md-9">
                    <Route exact path={routes.home} component={TodoPage} />
                    <Route path={routes.about} component={About} />
                    <Route path={routes.help} component={Help} />
                  </div>
              </div>
          </div>
);

export default App;
