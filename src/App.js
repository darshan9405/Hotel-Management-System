import classes from "./App.module.css";
import NavBar from "./Components/Navbar";
import ContentHolderPage from "./Pages/ContentHolderPage";
import SideBarHolderPage from "./Pages/SideBarHolderPage";
import "bootstrap/dist/css/bootstrap.min.css";
import StatusBar from "./Components/StatusBar";
import { useState } from "react";
function App() {
  const [orderData, setOrderData] = useState([]);

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
        <NavBar />
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.content}>
          <ContentHolderPage addItemHandler={addItem} />
        </div>
        <div className={classes.sideBar}>
          <SideBarHolderPage OrderedItems={orderData} />
        </div>
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
