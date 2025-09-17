import { useState, useEffect } from "react";
import Appname from "./components/Appname";
import Todosection from "./components/Todosection";
import Todoitems from "./components/Todoitems";
import "./App.css";

function App() {
  
  const loadTodos = () => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  };

  const [items, setItems] = useState(loadTodos);

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  
  const handleAdd = (name, duedate) => {
    if (!name || !duedate) return;
    setItems([...items, { name, duedate }]);
  };

  
  const handleDelete = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  return (
    <center className="main-container">
      <Appname />
      <Todosection onAdd={handleAdd} />
      <Todoitems items={items} onDelete={handleDelete} />
    </center>
  );
}

export default App;
