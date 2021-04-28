import React from "react";

const Reports = ({ data }) => {
  const calculateMaxTime = () => {
    const max = 0;
    for (let log of data) {
      console.log(Number(log.EntryTime) - Number(log.ExitTime));
    }
  };
  calculateMaxTime();

  return <h3>Reports</h3>;
};

export default Reports;
