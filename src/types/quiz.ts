export type Answer = {
  id: number;
  value: string;
};

export type Question = {
  id: number;
  value: string;
  correctAnswerId?: number;
  answers: Answer[];
};

export type Quiz = {
  id: number;
  questions: Question[];
  activePage: Page;
};

export type Page = {
  id: number;
  type: "question" | "answer";
};

export type ViewerAnswer = {
  questionId: number;
  answerId: number;
};
