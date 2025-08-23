import styles from "./BackendFrameworks.module.css";

const backendFrameworks = ({ frameworks }) => {
  return (
    <>
      <ul className={styles.myUl}>
        {/* In JavaScript’s Array.prototype.map method, the first
        parameter is always the current value, and the second is 
        the index: */}
        {frameworks.map((name, id) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default backendFrameworks;

