import classes from "./SideBarHolderPage.module.css";
import SideComponent from "../Components/SideComponent";
import ItemsCart from "../Components/Orders/ItemsCart";
import { useEffect, useState } from "react";
import nullLogo from "../images/null.png";
const SideBarHolderPage = (props) => {
  const [sideData, setSideData] = useState([]);
  useEffect(() => {
    const data = props.tableData.filter((value) => {
      return value.status === "Booked";
    });
    if (data.length !== 0) setSideData(data);
  }, [props.tableData]);
  return props.orderPage === false ? (
    <div
      className={classes.container}
      style={{ justifyContent: sideData.length === 0 ? "center" : "initial" }}
    >
      {sideData.map((data) => {
        var table = data.table;
        var name = data.name;
        return <SideComponent key={table} name={name} table={table} />;
      })}
      {sideData.length === 0 ? (
        <img
          style={{ width: "100px", height: "100px", alignSelf: "center" }}
          src={nullLogo}
        ></img>
      ) : null}
    </div>
  ) : (
    <ItemsCart OrderedItems={props.OrderedItems} />
  );
};
export default SideBarHolderPage;
