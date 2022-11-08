import styles from "./MealItemForm.module.css";

import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  const inputSettings = {
    id: `amount_${props.id}`,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input label="Amount" input={inputSettings} />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
