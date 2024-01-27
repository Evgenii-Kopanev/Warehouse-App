import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ProductPreview(props) {
  //props=>product
  //------------------------------------------------
  const {
    productList,
    setProductList,
    employeeList,
    setEmployeeList,
    setCurrentEmployee,
    currentEmployee,
  } = useContext(AppContext);
  console.log(
    "🚀 ~ file: ProductPreview.jsx:8 ~ ProductPreview ~ employeeList:",
    employeeList
  );

  const updateProduct = () => {
    if (!props.product.needForklift) {
      const productListClone = structuredClone(productList);
      const foundIndex = productListClone.findIndex(
        (pro) => props.product.id === pro.id
      );
      productListClone[foundIndex].inPlace = true;
      //----------------------------------
      let foundEmployee = employeeList.find(
        (employ) => employ.id === props.currentEmployee.id
      );

      let currentEmployeeCopy = {
        ...foundEmployee,
        inPlaceItems: foundEmployee.inPlaceItems + 1,
      };
      setCurrentEmployee(currentEmployeeCopy);

      const foundEmployeeIndex = employeeList.findIndex(
        (employ) => employ.id === props.currentEmployee.id
      );
      //----------------------------------
      const employeeListClone = structuredClone(employeeList);
      employeeListClone.splice(foundEmployeeIndex, 1, currentEmployeeCopy);
      setEmployeeList(employeeListClone);
      //----------------------------------
      setProductList(productListClone);
    } else {
      if (props.currentEmployee.haveForkliftLicsense) {
        const productListClone = structuredClone(productList);
        const foundIndex = productListClone.findIndex(
          (pro) => props.product.id === pro.id
        );
        productListClone[foundIndex].inPlace = true;
        //----------------------------------
        let foundEmployee = employeeList.find(
          (employ) => employ.id === props.currentEmployee.id
        );

        let currentEmployeeCopy = {
          ...foundEmployee,
          inPlaceItems: foundEmployee.inPlaceItems + 1,
        };
        setCurrentEmployee(currentEmployeeCopy);

        const foundEmployeeIndex = employeeList.findIndex(
          (employ) => employ.id === props.currentEmployee.id
        );
        //----------------------------------
        const employeeListClone = structuredClone(employeeList);
        employeeListClone.splice(foundEmployeeIndex, 1, currentEmployeeCopy);
        setEmployeeList(employeeListClone);
        //----------------------------------
        setProductList(productListClone);
      } else {
        alert("NEED FORK LICENSE!!");
      }
    }

    console.log(
      "🚀 ~ file: ProductPreview.jsx:30 ~ updateProduct ~ currentEmployee:",
      props.currentEmployee
    );
  };

  return (
    <div>
      <hr />
      <div>NO.: {props.product.id}</div>
      <div>Name: {props.product.name}</div>
      <div>need fork?: {!props.product.needForklift ? "NO" : "YES"}</div>
      <button onClick={() => updateProduct()}>UPDATE</button>
    </div>
  );
}
