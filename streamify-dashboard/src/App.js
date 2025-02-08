import React from "react";
import Dashboard from "../src/Dashboard"; 
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
}

export default App;


