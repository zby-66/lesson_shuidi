import React from 'react';
import { GlobalStyle } from './style';
import { IconStyle } from './assets/iconfont/iconfont';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes/index.js'
import store from './store/index'
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <GlobalStyle />
          <IconStyle/>
          { renderRoutes(routes)}
          {/* <i className="iconfont">&#xe62b;</i> */}
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
