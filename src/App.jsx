import React from "react";
import { LanguageProvider } from "./components/LanguageContext";
import Routes from "./Routes";

const App = () => (
  <LanguageProvider>
    <Routes />
  </LanguageProvider>
);

export default App;
