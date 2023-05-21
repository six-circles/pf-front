import React, { Fragment, useState, useEffect } from "react";
import "./QA.scss";
import { useParams } from "react-router-dom";
import { getToken, urlAxios } from "../../utils";
interface Question {
  id: number;
  text: string;
}

export function QuestionUser(props: any) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [getQuestion, setGetQuestion] = useState("");

  const {id}=useParams()
const {token, config}=getToken()

useEffect(() => {
handleQuestion();
},[]);

const handleQuestion = async () => {

try{
  const get = await urlAxios.get( `/questions/${token}`);
  console.log(get);}
catch(error:any){
  console.log(error.response.data);
}}
  return (
    <Fragment> 
    <div className="card">  
      <center><h1>Preguntas</h1></center>
      <br />
      <div onSubmit={handleQuestion}>
        {props?.questions &&
          props?.questions.map((item: any, index: any) => (
            <div key={index}>
              <p>{item.userName}</p>
              <p>{item.body}</p>
              
              
            </div>
          ))}
      </div>
      <br />
    
     

      <ul>
        {questions.map((questions) => (
          <li key={questions.id}>{questions.text}</li>
        ))}
      </ul>
      </div>
      </Fragment>
     
      
);
}