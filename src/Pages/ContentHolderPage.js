import MyCard from "../Components/MyCard";
import classes from "./ContentHolderPage.module.css";
import SideComponentOrder from "../Components/Orders/SideComponentOrder";
const ContentHolderPage = (props) => {
  return props.orderPage === false ? (
    <div className={classes.contentHolder}>
      {props.tableData.map((data) => {
        var key = data.table;
        var value = data.status;
        return (
          <MyCard
            header={key}
            status={value}
            key={key}
            orderPageHandler={props.orderPageHandler}
            tableHandlerFunction={props.tableHandlerFunction}
          />
        );
      })}
    </div>
  ) : (
    <SideComponentOrder addItemHandler={props.addItemHandler} />
  );
};
export default ContentHolderPage;
