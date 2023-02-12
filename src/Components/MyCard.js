import classes from "./Card.module.css";
import { Card } from "react-bootstrap";
import { useState } from "react";
import BackdropModel from "./BackdropModel";
const MyCard = (props) => {
  const [openBackDrop, setOpenBackDrop] = useState(false);

  const backDropHandler = () => {
    if (props.status === "Vacent") setOpenBackDrop(!openBackDrop);
    else props.orderPageHandler();
  };

  return (
    <>
      {openBackDrop ? (
        <BackdropModel
          tableNo={props.header}
          setBackdrop={backDropHandler}
          tableHandlerFunction={props.tableHandlerFunction}
        />
      ) : null}
      <Card
        style={{
          width: "12rem",
          height: "8rem",
          backgroundColor: "#F5F5F5",
          border: "1px solid #b39260e3",
          color: "#062A49",
          fontWeight: "bold",
          boxShadow: "-1px -1px 3px #b39260e3",
        }}
        className={classes.card}
        onClick={() => {
          backDropHandler(props.header);
        }}
      >
        <Card.Header className={classes.header}>
          Table-{props.header}
        </Card.Header>
        <Card.Body>
          <Card.Title
            style={{ color: props.status === "Vacent" ? "green" : "red" }}
          >
            {props.status}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
export default MyCard;
