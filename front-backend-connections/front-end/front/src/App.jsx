import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  return (
    <div>
      <h2>Hello Every Ones</h2>
      <h3>Data from backend:</h3>
      <h4>{jokes?.length}</h4>
      <div>
        {jokes.map((joke) => {
          return (
            <div key={joke.id}>
              <h4>{joke?.setup}</h4>
              <h4>{joke?.punchline}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
