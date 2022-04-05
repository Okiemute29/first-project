import React, { useState } from "react";
import Title from "./title";
import Module from "./module";
import Eventlist from "./eventlist";

function App() {
  const [showevent, setshowevent] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [event, setevent] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowsder live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 }
  ]);
  const handleClick = (id) => {
    setevent((prevValue) => {
      return prevValue.filter((event) => {
        return id !== event.id;
      });
    });
  };
  const handleClose = () => {
    setShowModel(false);
  };
  const handleOpen = () => {
    setShowModel(true);
  };
  return (
    <div className="container">
      <Title />
      <button
        onClick={() => {
          setshowevent(true);
        }}
      >
        show events
      </button>
      {showevent && <Eventlist event={event} handleClick={handleClick} />}

      <button onClick={handleOpen}>Show Event</button>
      {showModel && (
        <Module handleClose={handleClose}>
          <h2> 10% off cuopon code</h2>
          <p> use the code NINJA10 at the checkout</p>
        </Module>
      )}
    </div>
  );
}

export default App;
