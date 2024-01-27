import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [regId, setRegId] = useState(null);
  const [regName, setRegName] = useState("");
  const [regForklift, setRegForklift] = useState(false);
  //----------------
  const [errId, setErrId] = useState(false);
  const [errName, setErrName] = useState(false);
  //--------------
  const { employeeList, setEmployeeList } = useContext(AppContext);

  const navigate = useNavigate();

  /*******************************************************************/

  const checkId = (id) => {
    if (id.length == 5) {
      setErrId(false);
      setRegId(id);
    } else {
      setErrId(true);
    }
  };

  const checkName = (name) => {
    let isJustLetters = /^[a-zA-Z\s]+$/.test(name);
    let isWhiteSpace = /\s/.test(name);
    if (name.length >= 4 && isJustLetters && isWhiteSpace) {
      setErrName(false);
      setRegName(name);
    } else {
      setErrName(true);
    }
  };

  const register = () => {
    const registeredEmployee = {
      id: regId,
      fullName: regName,
      haveForkliftLicsense: regForklift,
      warehouseVisits: 0,
      inPlaceItems: 0,
    };
    if (
      employeeList.find((employee) => employee.id === registeredEmployee.id)
    ) {
      alert("Employee already Exist");
    } else {
      const employeeListClone = structuredClone(employeeList);
      employeeListClone.push(registeredEmployee);
      setEmployeeList(employeeListClone);
      navigate("/login");
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span
            style={{ display: "flex", flexDirection: "row", width: "5rem" }}
          >
            NO.{" "}
          </span>{" "}
          <input
            type="number"
            placeholder="Enter a employee ID"
            onChange={(e) => checkId(e.target.value)}
          />
        </div>
        {errId ? (
          <span style={{ color: "red" }}>
            the number must be with 5 digits.
          </span>
        ) : (
          <></>
        )}
        <div style={{ display: "flex", flexDirection: "row" }}>
          <span
            style={{ display: "flex", flexDirection: "row", width: "5rem" }}
          >
            FullName{" "}
          </span>{" "}
          <input
            type="text"
            placeholder="Enter a employee full Name"
            onChange={(e) => checkName(e.target.value)}
          />
        </div>
        {errName ? (
          <span style={{ color: "red" }}>
            the name must contain minimum 4 characters
          </span>
        ) : (
          <></>
        )}
      </div>
      <br />
      <div>forklift truck</div>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div>
          <input
            type="radio"
            value={true}
            checked={regForklift === true}
            onChange={(e) => setRegForklift(e.target.value)}
          />
          <br />
          <span>yes</span>
        </div>
        <div>
          <input
            type="radio"
            value={false}
            defaultChecked
            checked={regForklift === false}
            onChange={(e) => setRegForklift(e.target.value)}
          />
          <br />
          <span>No</span>
        </div>
      </div>
      <button onClick={register}>CREATE</button>
    </div>
  );
}
