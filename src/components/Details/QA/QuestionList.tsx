import React, { Fragment, useState } from "react";
import Style from"./QA.module.scss";
import { getToken, urlAxios } from "../../../utils";
import { useParams } from "react-router-dom";

interface Question {
  id: number;
  text: string;
}



export function QuestionList(props: any) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState("");
  const {id}=useParams()
const {token, config}=getToken()

  const handleQuestionSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (newQuestion.length > 0) {
      const body = { token, productId: id, body: newQuestion };
      try {
        await urlAxios.post("/product/questions", body, config);
        setQuestions([...questions, { id: questions.length + 1, text: newQuestion }]);
        setNewQuestion("");
      } catch (error: any) {
        console.log(error.response.data);
      }
    }
  };
  
  return (
    <Fragment>
    <div className={Style.card}>
      <div className={Style.view}>
      
      <br />
      <div></div>
        {props?.questions &&
          props?.questions.map((item: any, index: any) => (
            <div key={index}>
              <strong><p className={Style.username}>{item.userName}</p></strong>
              <p className={Style.bodyuser}>{item.body}</p>
             
              <br />
            </div>
          ))}
      </div>
      <br />
      <form onSubmit={handleQuestionSubmit}>
        <div className={Style.new}>
          <input
            className={Style.newinput}
            type="text"
            value={newQuestion}
            onChange={(event) => setNewQuestion(event.target.value)}
            placeholder="Escribe tu pregunta"
          />
        </div>
        <br />
       
      </form>

      </div>
      </Fragment>
);
}

