import { useState, Fragment } from "react";

//VITE_APP_ENV='development' env
function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <h1>React app setup</h1>
      <h1>Enviornment : {import.meta.env.VITE_APP_ENV}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </Fragment>
  );
}

export default App;
