import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import SmallLogin from "../components/SmallLogin";
import WelcomePage from "../components/WelcomePage";

export default function InnerLogin() {
  const { employeeList, setCurrentEmployee, currentEmployee, setEmployeeList } =
    useContext(AppContext);
  console.log(
    "🚀 ~ file: InnerLogin.jsx:9 ~ InnerLogin ~ currentEmployee:",
    currentEmployee
  );

  const navigate = useNavigate();
  const [isWelcome, setIsWelcome] = useState(false);
  const [inputID, setInputID] = useState(null);

  const enter = () => {
    console.log(
      "🚀 ~ file: InnerLogin.jsx:14 ~ InnerLogin ~ inputID:",
      inputID
    );
    console.log(
      "🚀 ~ file: InnerLogin.jsx:27 ~ enter ~ employeeList:",
      employeeList
    );

    if (inputID === 99999) {
      navigate("/manager");
    } else {
      const getOneEmployee = employeeList.find(
        (employee) => Number(employee.id) === inputID
      );

      if (getOneEmployee) {
        //CURRENT EMPLOYEE
        let currentEmployeeCopy = {
          ...getOneEmployee,
          warehouseVisits: getOneEmployee.warehouseVisits + 1,
        };
        setCurrentEmployee(currentEmployeeCopy);
        //EMPLOYEE LIST
        const foundedIndex = employeeList.findIndex(
          (employee) => Number(employee.id) === inputID
        );
        const employeeListClone = structuredClone(employeeList);
        employeeListClone.splice(foundedIndex, 1, currentEmployeeCopy);
        setEmployeeList(employeeListClone);
        setIsWelcome(true);
      } else {
        alert(`employee ${inputID} doesnt exists`);
      }
    }
  };

  return (
    <div>
      {!isWelcome ? (
        <SmallLogin enter={enter} inputID={inputID} setInputID={setInputID} />
      ) : (
        <WelcomePage currentEmployee={currentEmployee} />
      )}
    </div>
  );
}
