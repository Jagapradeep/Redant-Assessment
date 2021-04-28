import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "./common/table";

const Logs = ({ data: logs }) => {
  console.log(logs);

  return (
    <div
      className="container main"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Logs</h1>
      <Link to="/LogForm" className="btn btn-primary my-3">
        Add Log
      </Link>

      {logs && logs.length > 0 && <Table data={logs} />}
    </div>
  );
};

export default Logs;
