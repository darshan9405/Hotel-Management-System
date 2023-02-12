import classes from "./SideComponentOrder.module.css";
import { menusData } from "../../data/data";
import { itemsData } from "../../data/data";
import MenuCard from "./MenuCard";
import { useState } from "react";
const SideComponentOrder = () => {
  const [selected, setSelected] = useState([]);

  const menuSelectHandler = (name) => {
    const data = itemsData.filter((data) => {
      return data.name === name;
    });
    if (data.length !== 0) setSelected(data[0].items);
  };
  return (
    <div className={classes.container}>
      <div className={classes.menus}>
        {menusData.map((data) => {
          var key = data.name;
          return (
            <MenuCard
              name={data.name}
              key={key}
              selectHandler={menuSelectHandler}
            />
          );
        })}
      </div>
      <div className={classes.items}>
        {selected !== null &&
          selected.map((item) => {
            return <MenuCard name={item} key={item} selectHandler={null} />;
          })}
      </div>
    </div>
  );
};
export default SideComponentOrder;
