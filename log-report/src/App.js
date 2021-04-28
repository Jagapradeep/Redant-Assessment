import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./Components/navBar";
import NotFound from "./Components/notFound";
import Logs from "./Components/logs";
import Reports from "./Components/reports";
import LogForm from "./Components/logsForm";
import "./App.css";

function App() {
  const [logs, setLog] = useState([]);

  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route
            path="/LogForm"
            render={() => <LogForm logs={logs} setLogs={setLog} />}
          />
          <Route path="/Logs" render={() => <Logs data={logs} />} />
          <Route path="/Reports" render={() => <Reports data={logs} />} />
          <Route path="/NotFound" component={NotFound} />
          <Redirect from="/" exact to="/Logs" />
          <Redirect to="/NotFound" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
