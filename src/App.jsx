import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("");
  const [item, setItem] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSave = () => {
    if (data.trim()) {
      setItem([...item, { taskTitle: data, status: "pending" }]);
      setData("");
    }
  };

  const handleTaskStatus = (index) => {
    setItem(
      item.map((task, i) =>
        i === index
          ? { ...task, status: task.status === "pending" ? "completed" : "pending" }
          : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Simple ToDo App</h1>
      <input
        type="text"
        value={data}
        onChange={handleChange}
        placeholder="Enter a task"
      />
      <br />
      <button onClick={handleSave}>Save</button>
      <ul>
        {item.map((task, index) => (
          <li
            key={index}
            onClick={() => handleTaskStatus(index)}
            style={{
              textDecoration: task.status === "completed" ? "line-through" : "none",
              cursor: "pointer",
              color: task.status === "completed" ? "green" : "red",
            }}
          >
            {task.taskTitle}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
