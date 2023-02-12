import classes from "./ItemSideCard.module.css";

const ItemSideCard = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.gridLeft}>
        <div>{props.title}</div>
        <div>×{props.quantity}</div>
      </div>
      <div className={classes.gridRight}>
        <div>₹{props.price}</div>
      </div>
    </div>
  );
};
export default ItemSideCard;
