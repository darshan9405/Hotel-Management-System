import classes from "./SideBarHolderPage.module.css";
import SideComponent from "../Components/SideComponent";
import { sideData } from "../data/data";
import ItemsCart from "../Components/Orders/ItemsCart";
const SideBarHolderPage = (props) => {
  return (
    // <div className={classes.container}>
    //   {sideData.map((data) => {
    //     var table = data.table.toString();
    //     var name = data.name;
    //     return <SideComponent key={table} name={name} table={table} />;
    //   })}
    // </div>
    <ItemsCart OrderedItems={props.OrderedItems} />
  );
};
export default SideBarHolderPage;
