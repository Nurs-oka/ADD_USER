import { useState } from "react";
import Card from "./ui/Card";
import Btn from "./ui/Button";
import styles from "./UserForm.module.css";

function UserForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    if (name.trim() === "" || age.trim() === "") return;

    onAdd({
      id: Date.now(),
      name: name.trim(),
      age: age,
    });

    setName("");
    setAge("");
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.field}>
          <label htmlFor="inp-name">Имя</label>
          <input
            id="inp-name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Введите имя"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="inp-age">Возраст</label>
          <input
            id="inp-age"
            type="number"
            value={age}
            onChange={e => setAge(e.target.value)}
            placeholder="Введите возраст"
          />
        </div>
        <Btn type="submit">Добавить</Btn>
      </form>
    </Card>
  );
}

export default UserForm;
