import { Button } from "react-bootstrap";
import classes from "./ItemsCart.module.css";
import ItemSideCard from "./ItemSideCard";
import { useState, useEffect } from "react";
const ItemsCart = (props) => {
  const [totalValue, setTotalValue] = useState(0);
  useEffect(() => {
    let total = 0;
    props.OrderedItems.forEach((element) => {
      total += element.price;
    });
    if (total !== 0) {
      setTotalValue(total);
    }
  }, [props.OrderedItems]);
  return (
    <div className={classes.container}>
      <div className={classes.billContainer}>
        <div>Total Amount : ₹{totalValue}</div>
        <Button
          variant="success"
          style={{ margin: "1vh 1vw", alignSelf: "flex-end" }}
        >
          Pay
        </Button>
      </div>
      {props.OrderedItems.map((data, index) => {
        var key = index.toString();
        return (
          <ItemSideCard
            title={data.title}
            quantity={data.quantity}
            price={data.price}
          />
        );
      })}
    </div>
  );
};
export default ItemsCart;
