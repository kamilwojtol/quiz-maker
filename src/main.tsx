import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/state";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter(
  [
    {
      path: "/play/:quizId?",
      element: <App editMode={false} />,
    },
    {
      path: "/:quizId?",
      element: <App editMode={true} />,
    },
  ],
  {
    basename: "https://kamilwojtol.github.io/quiz-maker/",
  },
);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>,
);
