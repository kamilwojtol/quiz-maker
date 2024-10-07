import { MainView } from "./MainView/MainView";
import { Navigation } from "./Navigation/Navigation";
import { Settings } from "./Settings/Settings";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/state";
import { Page } from "../../types/quiz";

type Props = {};

export function Editor({}: Props) {
  const [selectedPage, setSelectedPage] = useState<Page>({
    id: 0,
    type: "question",
  });
  const quiz = useSelector((state: RootState) => state.quiz);

  return (
    <div className="h-[calc(100vh-80px)]">
      <div className="flex flex-row h-full">
        {quiz.questions.length && (
          <MainView
            quiz={quiz}
            activePage={quiz.questions[selectedPage.id]}
            className="w-3/4 h-full"
            type={selectedPage.type}
          />
        )}
        <Settings className="w-1/4 h-full" />
      </div>
      <Navigation
        changeView={(page: Page) => setSelectedPage(page)}
        quiz={quiz}
      />
    </div>
  );
}
