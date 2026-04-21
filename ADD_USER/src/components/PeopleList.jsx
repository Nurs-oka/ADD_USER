import { useState } from "react";
import Btn from "./ui/Button";
import styles from "./PeopleList.module.css";

function PeopleList({ items, onRemove }) {
  const [confirmId, setConfirmId] = useState(null);

  function handleDelete() {
    onRemove(confirmId);
    setConfirmId(null);
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {items.map(person => (
          <li key={person.id} className={styles.row}>
            <span>
              {person.name}, {person.age} лет
            </span>
            <Btn onClick={() => setConfirmId(person.id)}>Удалить</Btn>
          </li>
        ))}
      </ul>

      {confirmId !== null && (
        <div className={styles.overlay} onClick={() => setConfirmId(null)}>
          <div className={styles.dialog} onClick={e => e.stopPropagation()}>
            <h3 className={styles.dialogTitle}>Подтверждение</h3>
            <p className={styles.dialogText}>
              Вы точно хотите удалить этого пользователя?
            </p>
            <div className={styles.dialogActions}>
              <Btn onClick={handleDelete}>Да</Btn>
              <Btn onClick={() => setConfirmId(null)}>Отмена</Btn>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PeopleList;
