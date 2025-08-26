import FoodItem from "./FoodItem";
import styles from "./FoodList.module.css";

const FoodList = ({ healthyFoods }) => {
  return (
    <>
      <ul className={styles.myUl}>
        {/* In JavaScript’s Array.prototype.map method, the first parameter is always the current value, and the second is the index: */}
        {
          healthyFoods.map((name, id) => (
          <FoodItem name={name} key={id}/>
          ))
        }
      </ul>
    </>
  );
};

export default FoodList;


