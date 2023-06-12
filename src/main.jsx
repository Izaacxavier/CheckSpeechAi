import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import GlobalStyle from "./style/global";
import { ThemeProvider } from "styled-components";
import Theme  from './style/Theme'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <GlobalStyle />
      <App /> 
    </ThemeProvider>
  </React.StrictMode>
);
