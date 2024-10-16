import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/state";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createHashRouter([
  {
    path: "/:quizId?",
    element: <App editMode={true} />,
  },
  {
    path: "/play/:quizId?",
    element: <App editMode={false} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>,
);
