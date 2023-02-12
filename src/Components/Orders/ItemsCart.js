import { Button } from "react-bootstrap";
import classes from "./ItemsCart.module.css";
import ItemSideCard from "./ItemSideCard";
import { useState, useEffect } from "react";
const ItemsCart = (props) => {
  const [totalValue, setTotalValue] = useState(0);
  const [data, setData] = useState([]);
  useEffect(() => {
    let total = 0;
    const tempData = props.OrderedItems.filter((value) => {
      return value.table === props.selectedTableNo;
    });
    setData(tempData);
    data.forEach((element) => {
      total += element.price;
    });

    setTotalValue(total);
  }, [props.OrderedItems]);
  const paymentHandler = () => {
    props.paymentHandler(props.selectedTableNo);
  };
  return (
    <div className={classes.container}>
      <div className={classes.billContainer}>
        <div>Total Amount : ₹{totalValue}</div>
        <Button
          variant="success"
          style={{ margin: "1vh 1vw", alignSelf: "flex-end" }}
          onClick={paymentHandler}
        >
          Pay
        </Button>
      </div>
      {data.map((data, index) => {
        var key = index.toString();
        return (
          <ItemSideCard
            title={data.title}
            quantity={data.quantity}
            price={data.price}
            key = {key}
          />
        );
      })}
    </div>
  );
};
export default ItemsCart;
