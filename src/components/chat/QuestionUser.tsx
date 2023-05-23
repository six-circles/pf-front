import React, { Fragment, useState, useEffect } from "react";
import "./QA.scss";
import { useParams } from "react-router-dom";
import { getToken, urlAxios } from "../../utils";
import { Answers } from "..";
interface Question {
  id: number;
  text: string;
}

export function QuestionUser() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [getQuestion, setGetQuestion] = useState("");

  const {id}=useParams()
const {token, config}=getToken()



const handleQuestion = async () => {

try{
  const get = await urlAxios.get( `/questions/${token}`);
  console.log(get.data);
setQuestions([...get.data])
console.log(questions);

}   

catch(error:any){
  console.log(error.response.data);
}}

useEffect(() => {
handleQuestion();
},[]);
  return (
    <Fragment> 
    <div className="card">  
      <center>
        <h1>Preguntas Realizadas</h1>
        </center>
      <br /> 
      
      <br />
      <ul>
      <br />
      {questions &&
      questions?.map((questions:any) => (
       
          <li key={questions._id}>{questions.body}</li> 
           
        ))}
        <br />
        <Answers/>
      </ul>
      </div>
      </Fragment>   
);
}