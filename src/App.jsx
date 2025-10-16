import React from "react";
import Loading from "./components/Loading";
import AppRoutes from "./components/AppRoute";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Loading />
      <AppRoutes />
    </div>
  );
}

export default App;
