import React from "react";

function Table({ data }) {
  console.log(Object.keys(data[0]));

  return (
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          {Object.keys(data[0]).map((item) => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {Object.keys(data[0]).map((column) => (
              <td key={item[column]}>{item[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
