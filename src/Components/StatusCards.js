import classes from "./StatusCard.module.css";
import { CloseButton } from "react-bootstrap";
const StatusCard = (props) => {
  return (
    <div className={classes.container}>
      <div style={{display:"flex",flexDirection:"column"}}>
        <div className={classes.header}>Table: {props.table}</div>
        <div className={classes.status}>Status: {props.status}</div>
      </div>
      <CloseButton />
    </div>
  );
};
export default StatusCard;
