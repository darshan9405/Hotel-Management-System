import classes from "./App.module.css";
import NavBar from "./Components/Navbar";
import ContentHolderPage from "./Pages/ContentHolderPage";
import SideBarHolderPage from "./Pages/SideBarHolderPage";
import "bootstrap/dist/css/bootstrap.min.css";
import StatusBar from "./Components/StatusBar";
function App() {
  return (
    <div className={classes.container}>
      <div className={classes.titleBar}>
        <NavBar />
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.content}>
          <ContentHolderPage />
        </div>
        <div className={classes.sideBar}>
          <SideBarHolderPage />
        </div>
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
