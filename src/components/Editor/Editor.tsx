import { MainView } from "./MainView/MainView";
import { Navigation } from "./Navigation/Navigation";
import { Settings } from "./Settings/Settings";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../state/state";
import { Page, Quiz } from "../../types/quiz";
import { useParams } from "react-router-dom";
import { loadQuizFromQuizId } from "../../state/quiz/quiz";

type Props = {
  quiz: Quiz;
};

export function Editor({ quiz }: Props) {
  const [selectedPage, setSelectedPage] = useState<Page>({
    id: 0,
    type: "question",
  });

  return (
    <div className="h-[calc(100vh-80px)]">
      <div className="flex flex-row h-full">
        {quiz.questions.length ? (
          <>
            <MainView
              quiz={quiz}
              activePage={quiz.questions[selectedPage.id]}
              className="w-3/4 h-full"
              type={selectedPage.type}
            />
            <Settings className="w-1/4 h-full" />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Create your first quiz!</h1>
          </div>
        )}
      </div>
      <Navigation
        changeView={(page: Page) => setSelectedPage(page)}
        quiz={quiz}
      />
    </div>
  );
}
