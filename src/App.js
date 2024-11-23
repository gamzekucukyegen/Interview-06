import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "2*(4+4) sonucu nedir?",
    answers: ["2", "4", "8", "16"],
    correct: 3
  },
  {
    question: "9*9 sonucu nedir?",
    answers: ["18", "81", "80", "79"],
    correct: 1
  },
  {
    question: "Formula 1'in 2022 şampiyonu kimdir?",
    answers: [
      "Max Verstappen",
      "Charles Leclerd",
      "Lewis Hamilton",
      "Lando Norris"
    ],
    correct: 0
  },
  {
    question: "Formula 1 takviminde ilk sırada hangi grand prix vardır?",
    answers: [
      "Bahreyn Grand Prix",
      "Suudi Arabistan Grand Prix",
      "Avustralya Grand Prix",
      "Emilia Romagna Grand Prix"
    ],
    correct: 0
  },
  {
    question: "Hangisi Formula 1 takımlarından değildir?",
    answers: [
      "Ford-AMG F1 Team",
      "Alfa Romeo F1 Team Orlen",
      "BWT Alpine F1 Team",
      "Oracle Red Bull Racing"
    ],
    correct: 0
  }
];

function App() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
const [index,setIndex]=useState(0)
const [answer,setAnswer]=useState([])
const [isFinished,setIsFinished]=useState(false)

const handleAnswer=(answerIndex)=>{
  setAnswer((pre)=>[
    ...pre,
    {questionIndex:index,answerIndex}
  ])
}
const handleNext=()=>{
  if(index<questions.length-1){
    setIndex(index+1)
  }else{
    setIsFinished(true)
  }
}
if (isFinished) {
  const correctAnswers = answer.filter(
    (answer) =>
      questions[answer.questionIndex].correct === answer.answerIndex
  ).length;
  const score = ((correctAnswers / questions.length) * 100).toFixed(2);
  return <h2>Quiz Tamamlandı! Skorunuz: %{score}</h2>;
}

const currentQuestion = questions[index];



  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <ul>
  {currentQuestion.answers.map((option, optionIndex) => (
    <li
      key={optionIndex}
      onClick={() => handleAnswer(optionIndex)}
      style={{
        cursor: "pointer",
        padding: "5px",
        backgroundColor: answer.some(
          (a) =>
            a.questionIndex === index &&
            a.answerIndex === optionIndex
        )
          ? "lightblue"
          : "white",
        border: "1px solid black",
        margin: "5px",
        listStyle: "none"
      }}
    >
      {option}
    </li>
  ))}
</ul>
      <button onClick={handleNext} style={{ marginTop: "10px" }}>
        {index < questions.length - 1 ? "Sonraki Soru" : "Bitir"}
      </button>
    </div>
  );
          };


export default App;
