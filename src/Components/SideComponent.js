import { CloseButton, DropdownButton } from "react-bootstrap";
import classes from "./SideComponent.module.css";
const SideComponent = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <p>Table-{props.table}</p> <p>{props.name}</p>
      </div>
      <div className={classes.Buttons}>
        <CloseButton />
        <DropdownButton title ={""}/>
      </div>
    </div>
  );
};
export default SideComponent;
