import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Question, Quiz } from "../../types/quiz";

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
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions.push(action.payload);
    },
  },
});

export const { addQuestion } = quizSlice.actions;

export default quizSlice.reducer;
