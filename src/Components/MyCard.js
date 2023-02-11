import classes from "./Card.module.css";
import { Card } from "react-bootstrap";

const MyCard = (props) => {
  return (
    <Card
      style={{
        width: "14rem",
        height: "10rem",
        backgroundColor: "#F5F5F5",
        border: "1px solid #b39260e3",
        color: "#062A49",
        fontWeight: "bold",
        boxShadow: "-1px -1px 3px #b39260e3",
      }}
      className={"mb-2"}
    >
      <Card.Header className={classes.header}>Table-{props.header}</Card.Header>
      <Card.Body>
        <Card.Title
          style={{ color: props.status === "Vacent" ? "green" : "red" }}
        >
          {props.status}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
export default MyCard;
