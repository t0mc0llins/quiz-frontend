import { Routes, Route } from "react-router-dom";
import ActorQuiz from "./components/ActorQuiz";
import YearQuiz from "./components/YearQuiz";
import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import ScoreboardPage from "./pages/ScoreboardPage";
import YearQuizPage from "./pages/YearQuizPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/game" element={<GamePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/year" element={<YearQuiz />} />
        <Route path="/scoreboard" element={<ScoreboardPage />} />
        <Route path="/actor" element={<ActorQuiz />} />
        <Route path="/quiz" element={<YearQuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
