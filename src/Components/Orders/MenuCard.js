import classes from "./MenuCard.module.css";
import { Card } from "react-bootstrap";
const MenuCard = (props) => {
  return (
    <Card
      style={{
        width: "10rem",
        height: "5rem",
        backgroundColor: "white",
        color: "black",
      }}
      onClick={() => {
        props.selectHandler(props.name);
      }}
      className={classes.card}
    >
      <Card.Body
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          textAlign: "center",
        }}
      >
        {props.name}
      </Card.Body>
    </Card>
  );
};
export default MenuCard;
