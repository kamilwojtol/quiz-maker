import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Answer, Question, Quiz } from "../../types/quiz";

const initialState: Quiz = {
  id: 0,
  questions: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    loadQuizFromQuizId: (state, action: PayloadAction<Quiz>) => {
      state.id = action.payload.id;
      state.questions = action.payload.questions;
    },
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
    updateAnswer: (
      state,
      action: PayloadAction<{ id: number; pageId: number; value: string }>,
    ) => {
      const question = state.questions.find(
        (question) => question.id === action.payload.pageId,
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
      let answerId = 0;
      if (question) {
        if (question.answers.length != 0) {
          answerId = question.answers[question.answers.length - 1].id + 1;
        }
        question.answers.push({
          id: answerId,
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
  loadQuizFromQuizId,
} = quizSlice.actions;

export default quizSlice.reducer;
