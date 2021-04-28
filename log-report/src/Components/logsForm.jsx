import React, { useEffect, useState } from "react";
import Joi, { required } from "joi";
import { NavLink } from "react-router-dom";
import TimePicker from "react-time-picker";
import Logs from "./logs";

const userSchema = Joi.object({
  id: Joi.number().required(),
  Name: Joi.string().required(),
  EntryTime: Joi.string().required(),
  Reason: Joi.string().required(),
  VisitingPerson: Joi.string().required(),
  ExitTime: Joi.string().required(),
});

function LogForm({ logs, setLogs }) {
  const [log, setLog] = useState({});
  const [entryTime, setEntryTime] = useState("10:00");
  const [exitTime, setExitTime] = useState("10:00");
  const [error, seterror] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    log.EntryTime = entryTime;
    log.ExitTime = exitTime;
    log.Id = logs.length + 1;

    const temp = [...logs];
    temp.push(log);
    setLogs(temp);
  };

  const handleChange = (event) => {
    const data = { ...log };
    data[event.target.name] = event.target.value;
    setLog(data);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Log Entry</h1>
      <form style={{ fontSize: 18, width: 600 }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Name"
            onChange={handleChange}
            value={log.Name}
            name="Name"
          />
        </div>

        <div className="form-group">
          <label>Entry Time</label>
          <div>
            <TimePicker
              onChange={setEntryTime}
              value={log.EntryTime}
              name="EntryTime"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Reason</label>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Reason"
            value={log.Reason}
            onChange={handleChange}
            name="Reason"
          />
        </div>

        <div className="form-group">
          <label>Visiting Person</label>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter the name of the person you want to visit"
            onChange={handleChange}
            value={log.VisitingPerson}
            name="VisitingPerson"
          />
        </div>

        <div className="form-group">
          <label>Exit Time</label>
          <div>
            <TimePicker
              onChange={setExitTime}
              value={log.ExitTime}
              name="ExitTime"
            />
          </div>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error.message}
          </div>
        )}

        <button type="submit" className="btn btn-primary my-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LogForm;
