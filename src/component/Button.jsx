import styles from "./styles/button.scss";
const Button = (props) => {
  return (
    <button
      {...props}
      className={
        "d-flex justify-content-center items-center " +
        styles.main +
        " " +
        props.className
      }
    >submit</button>
  );
};

export default Button;