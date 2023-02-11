import MyCard from "../Components/MyCard";
import classes from "./ContentHolderPage.module.css";
import { tableData } from "../data/data";
const ContentHolderPage = () => {
  return (
    <div className={classes.contentHolder}>
      {tableData.map((data) => {
        var key = Object.keys(data);
        var value = Object.values(data);
        return (
          <MyCard header={key[0]} status={value[0]} key={key[0]} />
        );
      })}
    </div>
  );
};
export default ContentHolderPage;
