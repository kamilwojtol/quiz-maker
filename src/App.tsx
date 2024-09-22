import { Editor } from "./components/Editor/Editor";
import { Viewer } from "./components/Viewer/Viewer";
import { useState } from "react";
import { Quiz } from "./types/quiz";

function App() {
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(true);
  const [quiz, setQuiz] = useState<Quiz[]>([
    {
      id: 0,
      questions: [
        {
          id: 0,
          value: "Dokąd nocą tupta jeż?",
          answers: [
            {
              id: 0,
              value: "Do lasu na fufu",
            },
            {
              id: 1,
              value: "Do domu",
            },
            {
              id: 2,
              value: "Do Lipinek Łużyckich",
            },
            {
              id: 3,
              value: "Do krzaka",
            },
          ],
        },
        {
          id: 1,
          value: "Jak ma na imię główny bohater uniwersum Szkolna 17?",
          answers: [
            {
              id: 0,
              value: "Zbigniew",
            },
            {
              id: 1,
              value: "Krzysztof",
            },
            {
              id: 2,
              value: "Wiesław",
            },
            {
              id: 3,
              value: "Bronisław",
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="page">
      {isEditModeEnabled ? (
        <Editor quiz={quiz} setQuiz={setQuiz} />
      ) : (
        <Viewer quiz={quiz} />
      )}
    </div>
  );
}

export default App;
