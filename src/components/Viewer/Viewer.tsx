import { Quiz, ViewerAnswer } from "../../types/quiz";
import { useState } from "react";
import Button from "../Shared/Button";

type Props = {
  quiz: Quiz;
};

export function Viewer({ quiz }: Props) {
  const [answers, setAnswers] = useState<ViewerAnswer[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState<number | null>(null);

  function addAnswerToQuiz(answerId: number | null, questionId: number) {
    if (!answerId) {
      throw new Error("Click a button to select correct answer!");
    }

    answers.find((answer) => answer.questionId === questionId)
      ? addToQuiz(answerId, questionId)
      : setAnswers((prev) => [...prev, { answerId, questionId }]);
  }

  function addToQuiz(answerId: number, questionId: number) {
    const removeDuplicatedAnswers = answers.filter(
      (answer) => answer.questionId !== questionId,
    );

    setAnswers(() => [
      ...removeDuplicatedAnswers,
      { answerId: answerId, questionId },
    ]);
  }

  function finishQuiz() {
    let score = 0;

    quiz.questions.forEach((question) => {
      answers.forEach((quizAnswer) => {
        if (quizAnswer.answerId === question.correctAnswerId) {
          score++;
        }
      });
    });

    setScore(score);
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
                  onClick={() => {
                    setSelectedAnswer(answer.id);
                  }}
                />
                <div className="p-2 m-1 border-2 border-gray-400 rounded-xl flex flex-row cursor-pointer peer-checked:bg-slate-400 peer-checked:text-white">
                  {answer.value}
                </div>
              </label>
            );
          })}
      </div>
      <div className="flex flex-row gap-4 mt-4">
        <Button
          disabled={currentQuestion === 0}
          onClick={() => {
            setCurrentQuestion((prev) => prev - 1);
          }}
        >
          Previous question
        </Button>
        <Button
          disabled={!selectedAnswer || currentQuestion < answers.length}
          onClick={() => {
            addAnswerToQuiz(selectedAnswer, quiz.questions[currentQuestion].id);
          }}
        >
          Confirm
        </Button>
        {answers.length === quiz.questions.length ? (
          <Button
            onClick={() => {
              finishQuiz();
            }}
          >
            Finish
          </Button>
        ) : (
          <Button
            disabled={currentQuestion === quiz.questions.length - 1}
            onClick={() => {
              setCurrentQuestion((prev) => prev + 1);
            }}
          >
            Next question
          </Button>
        )}
      </div>
      <div>{`${currentQuestion + 1} / ${quiz.questions.length}`}</div>
      {score && (
        <h2 className="text-4xl">
          Your score: {score} / {quiz.questions.length}
        </h2>
      )}
    </div>
  );
}
