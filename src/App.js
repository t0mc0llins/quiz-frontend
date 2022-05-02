import { Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import QuestionPage from "./pages/QuestionPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/game" element={<GamePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/question" element={<QuestionPage />} />
      </Routes>
    </div>
  );
}

export default App;
