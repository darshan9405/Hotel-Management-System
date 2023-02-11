import StatusCard from "./StatusCards";
import { statusData } from "../data/data";
import classes from "./StatusBar.module.css";
const StatusBar = () => {
  return (
    <div className={classes.container}>
      {statusData.map((data) => {
        return (
          <StatusCard
            key={data.table.toString()}
            table={data.table}
            status={data.status}
          />
        );
      })}
    </div>
  );
};
export default StatusBar;
