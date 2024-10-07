import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Answer, Question, Quiz } from "../../types/quiz";

const initialState: Quiz = {
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
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<any>) => {
      state.questions.push(action.payload);
    },
    updateQuestion: (state, action: PayloadAction<Question>) => {
      const question = state.questions.find(
        (question) => question.id === action.payload.id,
      );
      if (question) {
        question.value = action.payload.value;
      }
    },
    updateAnswer: (state, action: PayloadAction<Answer>) => {
      const question = state.questions.find((question) =>
        question.answers.find((answer) => answer.id === action.payload.id),
      );
      if (question) {
        // @ts-ignore
        question.answers.find(
          (answer) => answer.id === action.payload.id,
        ).value = action.payload.value;
      }
    },
    addAnswer: (state, action: PayloadAction<Answer>) => {
      const question = state.questions.find(
        (question) => question.id === action.payload.id,
      );
      if (question) {
        question.answers.push({
          id: question.answers[question.answers.length - 1].id + 1,
          value: action.payload.value,
        });
      }
    },
    removeAnswer: (
      state,
      action: PayloadAction<{ answerId: number; questionId: number }>,
    ) => {
      const question = state.questions.find(
        (question) => question.id === action.payload.questionId,
      );
      if (question) {
        question.answers = question.answers.filter(
          (answer) => answer.id !== action.payload.answerId,
        );
      }
    },
  },
});

export const {
  addQuestion,
  updateQuestion,
  updateAnswer,
  addAnswer,
  removeAnswer,
} = quizSlice.actions;

export default quizSlice.reducer;
