import Orders from './orders';
import Customers from './customers';
import DenseTable from './table';
import Report from './Report';
import Dashboard from './navbar';
import Integration from './integrastion'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function PageRouter(){

    return(
        <div>
            <Router>
                <Dashboard/>

                <Switch>
                  
              <Route exact path="/">
                <DenseTable />
              </Route>

              <Route path="/Orders">
              <Orders />
              </Route>

              <Route path="/Customers">
               <Customers />
              </Route>

              <Route path="/Report">
               <Report />
              </Route>
              <Route path="/integration">
               <Integration />
              </Route>

              

          </Switch>
            </Router>
        </div>
    )
}

export default PageRouter


