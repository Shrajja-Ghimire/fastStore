import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CombineRoute from "./Routing/index.jsx";
import { Provider } from "react-redux";
import store from "./redux/stores/index.jsx";

createRoot(document.getElementById("root")).render(
  //provider wrapper takes store as the props
  <Provider store={store}>
    <StrictMode>
      <CombineRoute />
    </StrictMode>
  </Provider>
);
