import React, { Suspense} from 'react'
import {
  HashRouter, Route, Switch
} from 'react-router-dom'
import { routes } from '../src/routes'
// import 'antd/dist/antd.css';
import "../src/assets/scss/style.scss";


const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const App =()=> {
    return (
      <div className="BG-COLOR">
        <HashRouter>
          <Suspense fallback={loading}>
            <Switch>
              {routes.map((route, idx) => {
                return route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => (
                      <route.component {...props} />
                    )} />
                ) 
              })}
            </Switch>
          </Suspense>
        </HashRouter>
      </div>

    )
  // }
}


export default App
