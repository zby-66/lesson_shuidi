import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
function Pay() {
  //引入一个远程的pay资源， pay 上线完就是 url  
  System.import('http://127.0.0.1:8080/Pay.js')
  // fetch('.js')
  // XMLHttpRequest('.js')
}

//主应用
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/pay">Pay</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/pay" component={<Pay />}/>
        </Switch>
      </div>
    </Router>
  );
}