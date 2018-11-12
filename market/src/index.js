import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/store';

import * as appOperations from "./modules/app/appOperations";


import  App  from './routes/routes';
import './index.css';
import MyLoader from "./components/Loader";



class Main extends React.Component {

  componentDidMount() {
    store.dispatch(appOperations.init());

  }

  render(){
    return(
      <Provider store={store}>
        <PersistGate loading={ <MyLoader/> } persistor={ persistor }>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={App} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

ReactDOM.render( <Main/>, document.getElementById('root')
);
