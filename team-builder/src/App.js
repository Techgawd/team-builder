import React, { useState } from "react";
import Create from "./Components/Create";
import Note from "./Components/Note";


function App() {
  const [notes, setNotes] = useState([
    {
      memberName: "Angela Williams",
      email:
        "Angel_Legato@icloud.com",
        role: "Front End Developer"
    }
  ]);

  return (
    <div className="App">
      <h1>Team Member List</h1>

      <Create notes={notes} setNotes={setNotes} />
      <Note notes={notes} />
    </div>
  );
}

export default App;
