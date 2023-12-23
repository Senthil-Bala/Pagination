import React from "react";
import Table from "react-bootstrap/Table";
import "./Page.css";

function PageTable({ datas }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr id="table-head">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((ele, index) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PageTable;
