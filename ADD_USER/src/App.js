import { useState } from "react";
import UserForm from "./components/UserForm";
import PeopleList from "./components/PeopleList";

function App() {
  const [people, setPeople] = useState([]);

  function handleAddPerson(person) {
    setPeople(prev => [...prev, person]);
  }

  function handleRemovePerson(id) {
    setPeople(prev => prev.filter(p => p.id !== id));
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 24, color: "#222" }}>
        Управление пользователями
      </h1>
      <UserForm onAdd={handleAddPerson} />
      {people.length > 0 && (
        <PeopleList items={people} onRemove={handleRemovePerson} />
      )}
    </div>
  );
}

export default App;
