import React from "react";
import TimerProvider from './platform/TimerProvider';
import SettingsProvider from "./platform/SettingsProvider";
import WorkoutSettingsProvider from "./platform/WorkoutSettingsProvider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "./components/generic/Container/Container";
import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";


const App = () => {

  return (
      <Router>
        <WorkoutSettingsProvider>
        <SettingsProvider>
            <TimerProvider>
            <nav className="navigation">
                <ul>
                  <li key={1}>
                    <Link to="/">Workouts</Link>
                  </li>
                  <li key={2}>
                    <Link to="/docs">Documentation</Link>
                  </li>
                </ul>
              </nav>
              <br />
              <Container>
                <Switch>
                    <Route path="/docs">
                      <DocumentationView />
                    </Route>
                    <Route path="/">
                      <TimersView />
                    </Route>
                  </Switch>
              </Container>
              </TimerProvider>
          </SettingsProvider>
        </WorkoutSettingsProvider>
      </Router>
  );
}

export default App;

