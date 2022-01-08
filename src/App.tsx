import React from "react";

import { Header } from "./components/header";
import { GlobalStyle } from "./styles/index";
import { Dashboard } from "./components/dashboard";
function App() {
  return (
    <>
      <Header />

      <Dashboard />

      <GlobalStyle />
    </>
  );
}

export default App;
