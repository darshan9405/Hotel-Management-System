import classes from "./App.module.css";
import NavBar from "./Components/Navbar";
import ContentHolderPage from "./Pages/ContentHolderPage";
import SideBarHolderPage from "./Pages/SideBarHolderPage";
import "bootstrap/dist/css/bootstrap.min.css";
import StatusBar from "./Components/StatusBar";
import { useState } from "react";
import { tableData } from "./data/data";
function App() {
  const [orderData, setOrderData] = useState([]);
  const [orderPage, setOpenOrderPage] = useState(false);
  const [tableUserData, setTableData] = useState(tableData);
  const tableHandlerFunction = (tableData) => {
    var index = tableUserData.findIndex((value) => {
      return tableData.table === value.table;
    });
    var data = tableUserData;
    data[index] = tableData;
    setTableData([...data]);
  };
  const orderPageHandler = () => {
    setOpenOrderPage((prevState) => {
      let prev = prevState;
      if (prev == true) return false;
      else return true;
    });
  };
  const addItem = (itemInfo) => {
    setOrderData((prevState) => {
      const index = prevState.findIndex((value) => {
        return value.title === itemInfo.title;
      });
      if (index === -1) return [...prevState, itemInfo];
      let data = prevState;
      data[index].quantity = data[index].quantity + 1;
      data[index].price = data[index].quantity * 45;
      return [...data];
    });
  };
  return (
    <div className={classes.container}>
      <div className={classes.titleBar}>
        <NavBar orderPageHandler={orderPageHandler} orderPage={orderPage} />
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.content}>
          <ContentHolderPage
            addItemHandler={addItem}
            orderPageHandler={orderPageHandler}
            orderPage={orderPage}
            tableData={tableUserData}
            tableHandlerFunction={tableHandlerFunction}
          />
        </div>
        <div className={classes.sideBar}>
          <SideBarHolderPage
            OrderedItems={orderData}
            orderPageHandler={orderPageHandler}
            orderPage={orderPage}
            tableData={tableUserData}
          />
        </div>
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
