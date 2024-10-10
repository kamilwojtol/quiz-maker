import { Quiz, ViewerAnswer } from "../../types/quiz";
import { useState } from "react";

type Props = {
  quiz: Quiz;
};

export function Viewer({ quiz }: Props) {
  const [answers, setAnswers] = useState<ViewerAnswer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  function addAnswerToQuiz(answerId: number, questionId: number) {
    answers.find((answer) => answer.questionId === questionId)
      ? setAnswers(() => [{ answerId, questionId }])
      : setAnswers((prev) => [...prev, { answerId, questionId }]);
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <h2 className="text-4xl mt-2">
        {quiz.questions.length && quiz.questions[currentQuestion].value}
      </h2>
      <div className="flex flex-col gap-4 mt-4 w-1/2">
        {quiz.questions.length &&
          quiz.questions[currentQuestion].answers.map((answer, index) => {
            return (
              <label htmlFor={"answer_" + index} key={index}>
                <input
                  id={"answer_" + index}
                  type="radio"
                  name="answer"
                  value={answer.value}
                  key={index}
                  className="hidden peer"
                  onClick={(e) => {
                    addAnswerToQuiz(
                      answer.id,
                      quiz.questions[currentQuestion].id,
                    );
                  }}
                />
                <div className="p-2 m-1 border-2 border-gray-500 rounded-xl flex flex-row cursor-pointer peer-checked:bg-slate-400 peer-checked:text-white">
                  {answer.value}
                </div>
              </label>
            );
          })}
      </div>
      <div className="flex flex-col">
        <button
          onClick={() => {
            setCurrentQuestion((prev) => prev - 1);
          }}
        >
          Previous question
        </button>
        <button
          onClick={() => {
            setCurrentQuestion((prev) => prev + 1);
          }}
        >
          Next question
        </button>
      </div>
    </div>
  );
}
