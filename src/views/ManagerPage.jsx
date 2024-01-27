import React from "react";
import { useNavigate } from "react-router-dom";

export default function ManagerPage(props) {
  console.log("🚀 ~ file: ManagerPage.jsx:4 ~ ManagerPage ~ props:", props);
  const navigate = useNavigate();
  return (
    <div>
      <table>
        <tr>
          <th>NO</th>
          <th>Full Name</th>
          <th>Counter</th>
          <th>Number Of products</th>
        </tr>
        {props.employeeList.map((employee) => {
          return (
            <tr>
              <th>{employee.id}</th>
              <th>{employee.fullName}</th>
              <th>{employee.warehouseVisits}</th>
              <th>{employee.inPlaceItems}</th>
            </tr>
          );
        })}
        <button onClick={() => navigate("/")}>LOG OUT</button>
      </table>
    </div>
  );
}
