// React
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Defining routes
import * as ROUTES from "./routes";
import Setting from "./Settings/SettingHome/setting";
import SettingPage from "./Settings/SettingPages/settingPages";

const App = () => {
  return (
	  <>
	  <Router>
        <Switch>
          <Route path="/setting">
            <Setting/>
          </Route>
          <Route path="/setting-pages/:id">
            <SettingPage/>
          </Route>
        </Switch>
    </Router>
	  </>
    
  );
};
export default App;
