import React, { Fragment, useEffect, useState } from "react";
import "./QA.scss";
import { useParams } from "react-router-dom";
import { getToken, urlAxios } from "../../utils";
interface Answer {
 id: number;
  text: string;
}

export function Answers(props: any) {
  const [answer, setAnswers] = useState<Answer[]>([]);
  const [getComment, setGetComment] = useState("");
  const {questionId}=useParams()
const {token, config}=getToken()

useEffect(() => {
  handleComment();
  },[]);

  const handleComment = async () => {
    
if (getComment.length > 0) {
  const body ={token, id:questionId, body:getComment}
  console.log(body);
   
  try{
    const get = await urlAxios.get( `/product/comments/${token}`);
    console.log(get);}
  catch(error:any){
    console.log(error.response.data);
  }}}
  
  return (
    <Fragment>
    <div className="card">
      <center><h1>Comentarios</h1></center>
      <br />
      <div onSubmit={handleComment}>
        {props?.answer &&
          props?.answer.map((item: any, index: any) => (
            <div key={index}>
              <p>{item.userName}</p>
              <p>{item.body}</p>
            </div>
          ))}
      </div>
      <br />
      

      <ul>
        {answer.map((answer) => (
          <li key={answer.id}>{answer.text}</li>
        ))}
      </ul>
      </div>
      </Fragment>
);
}