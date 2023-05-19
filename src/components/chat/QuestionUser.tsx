import React, { Fragment, useState } from "react";
import "./QA.scss";
import { useParams } from "react-router-dom";
import { getToken, urlAxios } from "../../utils";
interface Question {
  id: number;
  text: string;
}

export function QuestionUser(props: any) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState("");
  const {id}=useParams()
const {token, config}=getToken()

  const handleQuestionSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
if (newQuestion.length > 0) {
  const body ={token,productId:id,body:newQuestion}
  console.log(body);
  
  try{
    const response = await urlAxios.post( "/product/questions", body,config);
    console.log(response);}
  catch(error:any){
    console.log(error.response.data);
  }}}
  
  return (
    <Fragment>
    <div className="card">
      <center><h1>Preguntas</h1></center>
      <br />
      <div>
        {props?.questions &&
          props?.questions.map((item: any, index: any) => (
            <div key={index}>
              <p>{item.userName}</p>
              <p>{item.body}</p>
            </div>
          ))}
      </div>
      <br />
      <form onSubmit={handleQuestionSubmit}>
        <div className="new">
          <input
            className="new"
            type="text"
            value={newQuestion}
            onChange={(event) => setNewQuestion(event.target.value)}
            placeholder="Escribe tu pregunta"
          />
        </div>
        <br />
        <center><div className="send">
          <button className="send" type="submit">Publicar pregunta
          </button>
        </div></center>
      </form>

      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ul>
      </div>
      </Fragment>
);
}