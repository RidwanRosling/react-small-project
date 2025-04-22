import { useState } from "react";

const faqList = [
  {
    id: 1,
    question: "Who are you?",
    answer:
      "I’m a university student majoring in Information Systems in Indonesia. I’m naturally curious and enjoy exploring how technology can solve real-world problems in creative ways.",
  },
  {
    id: 2,
    question: "What do you enjoy learning?",
    answer: "I like to explore something that relates to computer science.",
  },
  {
    id: 3,
    question: "What programming languages do you know?",
    answer:
      "I’m comfortable with Python, JavaScript, and Node.js. I’m always looking for opportunities to deepen my skills and learn new technologies.",
  },
];

export default function Faq() {
  const [state, setState] = useState(null);

  function handleState(id) {
    setState((prevState) => (prevState === id ? null : id));
  }

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions – About Me</h2>
      {faqList.map((faq) => (
        <Descrip
          key={faq.id}
          isState={state === faq.id}
          handleAnswer={() => handleState(faq.id)}
          questions={faq.question}
          answers={faq.answer}
        />
      ))}
    </div>
  );
}

function Descrip({ isState, handleAnswer, questions, answers }) {
  return (
    <div className="faq-item">
      <div>
        <span>{questions}</span>
        <button onClick={handleAnswer}>{isState ? "-" : "+"}</button>
      </div>
      {isState && <p>{answers}</p>}
    </div>
  );
}
