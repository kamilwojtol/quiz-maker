export type Answer = {
  id: number;
  value: string;
};

export type Question = {
  id: number;
  value: string;
  answers: Answer[];
};

export type Quiz = {
  id: number;
  questions: Question[];
};

export type Page = {
  id: number;
  type: "question" | "answer";
};
