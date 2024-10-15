import { MainView } from "./MainView/MainView";
import { Navigation } from "./Navigation/Navigation";
import { Settings } from "./Settings/Settings";
import { Page, Quiz } from "../../types/quiz";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/state";
import { changeActivePage } from "../../state/quiz/quiz";

type Props = {
  quiz: Quiz;
};

export function Editor({ quiz }: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="h-[calc(100vh-80px)]">
      <div className="flex flex-row h-full">
        {quiz.questions.length ? (
          <>
            <MainView
              quiz={quiz}
              activePage={quiz.questions[quiz.activePage.id]}
              className="w-3/4 h-full"
              type={quiz.activePage.type}
            />
            <Settings
              activePage={quiz.questions[quiz.activePage.id]}
              className="w-1/4 h-full"
            />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Create your first quiz!</h1>
          </div>
        )}
      </div>
      <Navigation
        changeView={(page: Page) => dispatch(changeActivePage(page))}
        quiz={quiz}
      />
    </div>
  );
}
