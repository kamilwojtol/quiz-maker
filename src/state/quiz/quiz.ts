import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Answer, Page, Question, Quiz } from "../../types/quiz";

const initialState: Quiz = {
  id: 0,
  questions: [],
  activePage: {
    id: 0,
    type: "question",
  },
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
      state.activePage.id = state.questions.length - 1;
      state.activePage.type = "question";
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
    removeQuestion: (state, action: PayloadAction<number>) => {
      state.questions = state.questions.filter(
        (question) => question.id !== action.payload,
      );
    },
    setCorrectAnswer: (
      state,
      action: PayloadAction<{ questionId: number; answerId: number }>,
    ) => {
      const question = state.questions.find(
        (question) => question.id === action.payload.questionId,
      );
      if (question) {
        question.correctAnswerId = action.payload.answerId;
      }
    },
    changeActivePage: (state, action: PayloadAction<Page>) => {
      state.activePage.id = action.payload.id;
      state.activePage.type = action.payload.type;
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
  setCorrectAnswer,
  removeQuestion,
  changeActivePage,
} = quizSlice.actions;

export default quizSlice.reducer;
