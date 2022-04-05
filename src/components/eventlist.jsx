import React from "react";

export default function Title({ event, handleClick }) {
  return (
    <div>
      {event.map((event, index) => {
        return (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={() => handleClick(event.id)}>change name</button>
          </div>
        );
      })}
    </div>
  );
}
