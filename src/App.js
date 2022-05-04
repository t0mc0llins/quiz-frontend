import { Routes, Route } from "react-router-dom";
import ActorQuizPage from "./pages/ActorQuizPage";
import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import OddOneQuizPage from "./pages/OddOneQuizPage";
import ScoreboardPage from "./pages/ScoreboardPage";
import YearQuizPage from "./pages/YearQuizPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/game" element={<GamePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/scoreboard" element={<ScoreboardPage />} />
        <Route path="/actor" element={<ActorQuizPage />} />
        <Route path="/quiz" element={<YearQuizPage />} />
        <Route path="/odd" element={<OddOneQuizPage />} />
      </Routes>
    </div>
  );
}

export default App;
