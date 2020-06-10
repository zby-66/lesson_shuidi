import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
// 细节， 
import { createMuiTheme, MuiThemeProvider } from  "@material-ui/core/styles"; 
import "./i18n";
// Provider 不是 redux   独有的  
// material design 风格


// 1.   hello   你好   韩国  国际化  i18n 插件
// 2. 技术不一样 material-ui 不同民族，  定制风格 Theme   


const theme = createMuiTheme({ //风格化 
  typography: {
    useNextVariants: true
  }
})


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <HashRouter>
      <Switch>
        <Route exact={true} path="/" component={LoginPage} />
      </Switch>
    </HashRouter>
  </MuiThemeProvider>
  ,document.getElementById('root') 
)
