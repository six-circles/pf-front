import React, { Fragment, useState, useEffect, ReactNode } from "react";
import Style from"./QAS.module.scss";
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
  const {id } = useParams();
  const newAnswerObj = {
    body: newAnswer,
    questionid: props.id,
   
  };




  const handleAnswerSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (newAnswer.trim() === "") {
      return;
    }
console.log(props.id);

    console.log(newAnswerObj);
    try {
      
      const response = await urlAxios.post("/product/questions/answers", newAnswerObj, config);
      
      setAnswers([...answers, response.data]);
      setNewAnswer(" ");
    
           
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

 
  return (
    <Fragment>
        
        <form onSubmit={handleAnswerSubmit}>
        <div className={Style.new}>
        <ul className={Style.ulanswer}>
          {answers &&
            answers?.map((answer: any) => (
              <li className={Style.lianswer}  key={answer._id}>{answer.body}</li>
              
            ))}
          
        </ul>
          <input className={Style.inputanswer}
            type="text"
            value={newAnswer}
            onChange={(event) => setNewAnswer(event.target.value)}
            placeholder="Escribe tu respuesta"
          /></div>
          <button className={Style.answersubmit} type="submit">Enviar respuesta</button>
          
        </form>
      
    </Fragment>
  );
}

