import { CloseButton, DropdownButton, Dropdown } from "react-bootstrap";
import classes from "./SideComponent.module.css";
const SideComponent = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <p>Table-{props.table}</p> <p>{props.name}</p>
      </div>
      <div className={classes.Buttons}>
        <CloseButton
          onClick={() => {
            props.paymentHandler(props.table);
          }}
        />
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Items
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {props.OrderedItems.map((value) => {
              if (value.table !== props.table) return null;
              return <Dropdown.Item>{value.title}</Dropdown.Item>;
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
export default SideComponent;
