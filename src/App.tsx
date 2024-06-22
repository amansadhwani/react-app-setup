import { useState, Fragment } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <h4>
        To setup env just create .env file at root folder and give values as
        APP_ENV='123'
      </h4>
      <h1>React app setup</h1>
      <h1>Enviornment : {process.env.APP_ENV}</h1>
      <h1>KEY : {process.env.APP_KEY}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </Fragment>
  );
}

export default App;
