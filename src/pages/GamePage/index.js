import React from "react";
import QuizApi from "../../components/QuizApi";
import SpinningWheel from "../../components/SpinningWheel";

export default function GamePage() {
  return (
    <div>
      <SpinningWheel />
      <QuizApi />
    </div>
  );
}
