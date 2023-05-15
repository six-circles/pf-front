import React, { useState } from 'react';
import "./QA.scss"
interface Question {
  id: number;
  text: string;
}

function QuestionList() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState('');

  const handleQuestionSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (newQuestion.trim() === '') {
      return;
    }

    const newQuestionObj: Question = {
      id: questions.length + 1,
      text: newQuestion
    };

    setQuestions([...questions, newQuestionObj]);
    setNewQuestion('');
  };

  return (
    <div className='card'>
      <h1>Preguntas</h1>

      <form onSubmit={handleQuestionSubmit}>
        <div className='new'>
        <input
          type="text"
          value={newQuestion}
          onChange={event => setNewQuestion(event.target.value)}
          placeholder="Escribe tu pregunta"
        />
        </div>
        <div className='send'>
        <button type="submit">Publicar pregunta</button>
      </div>
      </form>

      <ul>
        {questions.map(question => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
