import classes from "./MenuCard.module.css";
import { Card } from "react-bootstrap";
const ItemCard = (props) => {
  return (
    <Card
      style={{
        width: "10rem",
        height: "5rem",
        backgroundColor: "white",
        color: "black",
        userSelect: "none",
      }}
      onClick={() => {
        props.addItemHandler({
          table: props.selectedTableNo,
          title: props.name,
          quantity: 1,
          price: 45,
        });
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
export default ItemCard;
