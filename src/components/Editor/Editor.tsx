import { Quiz } from "../../types/quiz";
import { MainView } from "./MainView/MainView";
import { Navigation } from "./Navigation/Navigation";
import { Settings } from "./Settings/Settings";
import { useState } from "react";

type Props = {
  quiz: Quiz[];
  setQuiz: () => void;
};

export function Editor({ quiz }: Props) {
  const [selectedPage, setSelectedPage] = useState({
    id: 0,
    type: "question",
  });

  return (
    <div className="h-[calc(100vh-80px)]">
      <div className="flex flex-row h-full">
        <MainView className="w-3/4 h-full" />
        <Settings className="w-1/4 h-full" />
      </div>
      <Navigation />
    </div>
  );
}
