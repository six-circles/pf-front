import React, { Fragment, useState, useEffect } from "react";
import Style from"./QAS.module.scss";
import { useParams } from "react-router-dom";
import { getToken, urlAxios } from "../../utils";
import { Answers } from "..";
interface Question {
  id: number;
  text: string;
}

export function QuestionUser(props:any) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [getQuestion, setGetQuestion] = useState("");

  const {id}=useParams()
const {token, config}=getToken()



const handleQuestion = async () => {

try{
  const get = await urlAxios.get( `/${token}/product`);
  //questions/${token} /product/:productID  /${token}/product
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
console.log(questions);

  return (
    <Fragment> 
    <div className={Style.card}>  
      <center><h1>Preguntas recibidas</h1></center>
      <br /> 
      <br />
      <ul className={Style.ulquestion}>
      <br />
      {questions && questions.map((question: any) => (
  question.questions.map((nestedQuestion: any) => (
    
    
    <div key={nestedQuestion._id}>
    {console.log(nestedQuestion._id)}
    
    <li >{nestedQuestion.body}</li>
    <Answers id={nestedQuestion._id}/>
    </div>
  ))
))}
      
        <br />
      </ul><br />
      
      <br />
      </div>
      </Fragment>   
);
}