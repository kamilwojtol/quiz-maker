import { useDispatch, useSelector } from "react-redux";
import { Editor } from "./components/Editor/Editor";
import { Viewer } from "./components/Viewer/Viewer";
import { AppDispatch, RootState } from "./state/state";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { loadQuizFromQuizId } from "./state/quiz/quiz";

type Props = {
  editMode: boolean;
};

function App({ editMode }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { quizId } = useParams();
  const quiz = useSelector((state: RootState) => state.quiz);

  useEffect(() => {
    if (quizId) {
      const quiz = JSON.parse(decodeURIComponent(atob(quizId)));
      dispatch(loadQuizFromQuizId(quiz));
    }
  }, [quizId]);

  return (
    <div className="page">
      {editMode ? <Editor quiz={quiz} /> : <Viewer quiz={quiz} />}
    </div>
  );
}

export default App;
