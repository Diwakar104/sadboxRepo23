import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import productReducer from "./reducer/productReducer";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(productReducer);
root.render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
