import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ProductPreview from "./ProductPreview";
import { useNavigate } from "react-router-dom";

export default function WelcomePage(props) {
  const {
    productList,
    setProductList,
    initialEmployeeState,
    setCurrentEmployee,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>welcome {props.currentEmployee.fullName}</h1>
      <div>
        <span>details</span>
        <div>Full Name: {props.currentEmployee.fullName}</div>
        <div>NO.: {props.currentEmployee.id}</div>
        <div>
          forkLift truck license:{" "}
          {props.currentEmployee.haveForkliftLicsense ? "YES" : "NO"}
        </div>
      </div>
      <div>List Of Products</div>
      <div>
        {productList.map((product, index) => {
          if (!product.inPlace) {
            return (
              <ProductPreview
                key={index}
                product={product}
                currentEmployee={props.currentEmployee}
              />
            );
          }
        })}
      </div>
      <hr />
      <button onClick={() => logOut()}>LOG OUT</button>
    </div>
  );
}
