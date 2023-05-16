import React, { useState } from 'react';
import "./QA.scss"
interface Question {
  id: number;
  text: string;
}

function QuestionList(props:any) {
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
console.log(props.questions);

  return (
    <div className='card'>
      <h1>Preguntas</h1>
      <br />
      <div>
       {props?.questions&& props?.questions.map((item:any,index:any)=>(
        <div key={index}>
          <p>{item.userName}</p>
        <p >{item.body}</p>
        </div>
       ))}
      </div>
       <br />
      <form onSubmit={handleQuestionSubmit}>
        <div className='new'>
        <input className='new'
          type="text"
          value={newQuestion}
          onChange={event => setNewQuestion(event.target.value)}
          placeholder="Escribe tu pregunta"
        />
        </div>
        <br />
        <div className='send'>
        <button  className='send' type="submit">Publicar pregunta</button>
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
