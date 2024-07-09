import "./App.css";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import OptionPanel from "./components/OptionPanel/OptionPanel";
import QuizView from "./components/QuizView/QuizView";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <div className="flex flex-row">
        <QuizView className="w-3/4" />
        <OptionPanel className="w-1/4" />
      </div>
      <ControlPanel />
    </div>
  );
}

export default App;
