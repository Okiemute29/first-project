import React, { useState } from "react";

function App() {
  var click = false;
  var [name, setname] = useState();
  function inputvalue(event) {
    setname(event.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {click && { name }}</h1>
      <input
        onChange={inputvalue}
        type="text"
        placeholder="What's your name?"
      />
      <button
        onClick={() => {
          click = true;
          console.log(name);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
