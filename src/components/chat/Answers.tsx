import React, { Fragment, useState } from "react";
import "./QA.scss";
import { useParams } from "react-router-dom";
import { getToken, urlAxios } from "../../utils";
interface Answer {
 id: number;
  text: string;
}

export function Answers(props: any) {
  const [answer, setAnswers] = useState<Answer[]>([]);
  const [newAnswer, setNewAnswer] = useState("");
  const {questionId}=useParams()
const {token, config}=getToken()

  const handleQuestionSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
if (newAnswer.length > 0) {
  const body ={token, id:questionId,body:newAnswer}
  console.log(body);
   
  try{
    const response = await urlAxios.post( "/product/questions/answers", body,config);
    console.log(response);}
  catch(error:any){
    console.log(error.response.data);
  }}}
  
  return (
    <Fragment>
    <div className="card">
      <center><h1>Respuestas</h1></center>
      <br />
      <div>
        {props?.answer &&
          props?.answer.map((item: any, index: any) => (
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
            value={newAnswer}
            onChange={(event) => setNewAnswer(event.target.value)}
            placeholder="Escribe tu respuesta"
          />
        </div>
        <br />
        <center><div className="send">
          <button className="send" type="submit">
            Publicar respuesta</button>
        </div></center>
      </form>

      <ul>
        {answer.map((answer) => (
          <li key={answer.id}>{answer.text}</li>
        ))}
      </ul>
      </div>
      </Fragment>
);
}