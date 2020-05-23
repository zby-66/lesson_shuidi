import React, {
  Suspense, lazy
} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
// Suspense 悬念
// 组件 懒加载，加载这么过程，
const MicroApp1 = lazy(() => System.import('http://127.0.0.1:8080/Pay.js'));
function Pay() {
  // 引入一个远程的 Pay 资源，Pay 上线 就是 url
  
  // fetch('.js')
  // xmlhttprequest('.js')
  return (
    <Suspense fallback="loading...">
      123456
      <MicroApp1 />
    </Suspense>
  )
}
// 主应用 
export default function App() {
  return (
    <Router>
      <div>
        hhhh
        <ul>
          <li>
            <Link to="/pay">Pay</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/pay" component={Pay}/>
        </Switch>
      </div>
    </Router>
  );
}
