import React, { useState } from "react";

const Create = props => {
  const initialNote = { memberName: "", email: "" };
  const [newNote, setNewNote] = useState(initialNote);

  const handleChange = event => {
    setNewNote({
      ...newNote,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!newNote.memberName || !newNote.email) {
      alert("Please fill out both fields!");
    } else {
      props.setNotes([newNote, ...props.notes]);
      resetForm();
    }
  };

  const resetForm = () => {
    setNewNote(initialNote);
  };

  return (
    <form onSubmit={handleSubmit}>
     <h3>Add Member</h3>
      <input
        type="text"
        name="memberName"
        placeholder="Name"
        onChange={handleChange}
        value={newNote.title}
      />
            <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={newNote.title}
      />
      <input 
      type="text"
      name="role" 
      placeholder="Role"
      onChange={handleChange} 
      value={newNote.body} />

      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
};

export default Create;