import React, { Fragment, useState, useEffect, ReactNode } from "react";
import "./QA.scss";
import { useParams } from "react-router-dom";
import { getToken, urlAxios } from "../../utils";

interface Question {
  id: number;
  text: string;
}

interface Answer {
  body: ReactNode;
  question: any;
  id: number;
}

export function Answers(props:any) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [newAnswer, setNewAnswer] = useState("");
  const {token, config}=getToken()
  const { id } = useParams();
  const newAnswerObj = {
    body: newAnswer,
    question: id,
    token
  };




  const handleAnswerSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (newAnswer.trim() === "") {
      return;
    }

    
    try {
      
      const response = await urlAxios.post("/product/questions/answers", newAnswerObj, config);
      
      setAnswers([...answers, response.data]);
      setNewAnswer(" ");
    console.log(newAnswer);
           
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

 
  return (
    <Fragment>
        
        <form onSubmit={handleAnswerSubmit}>
        <div className="new">
        <ul className="ulanswer">
          {answers &&
            answers?.map((answer: any) => (
              <li className="lianswer"  key={answer._id}>{answer.body}</li>
            ))}
          
        </ul>
          <input className="inputanswer"
            type="text"
            value={newAnswer}
            onChange={(event) => setNewAnswer(event.target.value)}
            placeholder="Escribe tu respuesta"
          /></div>
          <button className="answersubmit" type="submit">Enviar respuesta</button>
          
        </form>
      
    </Fragment>
  );
}

