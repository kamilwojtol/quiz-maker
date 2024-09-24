import { Editor } from "./components/Editor/Editor";
import { Viewer } from "./components/Viewer/Viewer";
import { useState } from "react";

function App() {
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(true);

  return (
    <div className="page">{isEditModeEnabled ? <Editor /> : <Viewer />}</div>
  );
}

export default App;
