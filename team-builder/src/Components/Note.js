import React from "react";

function Note(props) {
  return (
    <>
      {props.notes.map((note, index) => (
        <div className="note" key={index}>
          <h2>{note.memberName}</h2>
          <p>{note.email}</p>
          <p>{note.role}</p>
        </div>
      ))}
    </>
  );
}

export default Note;
