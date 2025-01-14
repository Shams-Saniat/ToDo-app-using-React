import { useState } from 'react'
import './App.css'

function App() {

  let [data, setData] = useState("");
  let [item, setItem] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  }

  const handleSave = () => {
    setItem([...item, data]); // Corrected "items" to "item"
  }

  return (
    <div className='App'>
      <input type="text"
        value={data}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleSave}>save</button>
      <ul>
        {
          item.map((item, index) => {
            return <li key={index}>{item}</li>; // Removed extra ">"
          })
        }
      </ul>
    </div>
  )
}

export default App;
