import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import { useState } from "react";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import InnerLogin from "./views/InnerLogin";
import ManagerPage from "./views/ManagerPage";

const initialProductListState = [
  {
    id: 11122,
    name: "GREEN BOX",
    needForklift: false,
    inPlace: false,
  },
  {
    id: 22554,
    name: "GREEN BOX",
    needForklift: false,
    inPlace: false,
  },
  {
    id: 66698,
    name: "BLUE BOX",
    needForklift: true,
    inPlace: false,
  },
  {
    id: 78544,
    name: "RED BOX",
    needForklift: false,
    inPlace: false,
  },
  {
    id: 69875,
    name: "RED BOX",
    needForklift: false,
    inPlace: false,
  },
];

function App() {
  const initialEmployeeState = {
    id: null,
    fullName: "",
    haveForkliftLicsense: null,
    warehouseVisits: 0,
    inPlaceItems: 0,
  };
  const [currentEmployee, setCurrentEmployee] = useState(initialEmployeeState);
  const [employeeList, setEmployeeList] = useState([]);
  console.log("🚀 ~ file: App.jsx:52 ~ App ~ employeeList:", employeeList);

  const [productList, setProductList] = useState(initialProductListState);

  return (
    <>
      <AppContext.Provider
        value={{
          employeeList,
          setEmployeeList,
          productList,
          setProductList,
          currentEmployee,
          setCurrentEmployee,
          initialEmployeeState,
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<InnerLogin />} />
          <Route
            path="/manager"
            element={<ManagerPage employeeList={employeeList} />}
          />
        </Routes>
      </AppContext.Provider>
    </>
  );
}

export default App;
