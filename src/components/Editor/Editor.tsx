import { MainView } from "./MainView/MainView";
import { Navigation } from "./Navigation/Navigation";
import { Settings } from "./Settings/Settings";
import { useState } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/state";

type Props = {};

export function Editor({}: Props) {
  const [selectedPage, setSelectedPage] = useState({
    id: 0,
    type: "question",
  });
  const quiz = useSelector((state: RootState) => state.quiz);

  return (
    <div className="h-[calc(100vh-80px)]">
      <div className="flex flex-row h-full">
        <MainView quiz={quiz} className="w-3/4 h-full" />
        <Settings className="w-1/4 h-full" />
      </div>
      <Navigation quiz={quiz} />
    </div>
  );
}
