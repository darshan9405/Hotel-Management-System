import classes from "./SideBarHolderPage.module.css";
import SideComponent from "../Components/SideComponent";
import { sideData } from "../data/data";
const SideBarHolderPage = () => {
  return (
    <div className={classes.container}>
      {sideData.map((data) => {
        var table = data.table.toString();
        var name = data.name;
        return <SideComponent key={table} name={name} table={table} />;
      })}
    </div>
  );
};
export default SideBarHolderPage;
