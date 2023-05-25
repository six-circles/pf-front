import React, { Fragment, useState, useEffect, ReactNode } from "react";
import Style from"./QAS.module.scss";
import { useParams } from "react-router-dom";
import { getToken, urlAxios } from "../../utils";

interface Answer {
  body: ReactNode;
  question: any;
  id: number;
}
   
export function Getanswers(props:any) {
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [getAnswer, setGetAnswer] = useState("");
  
  
  const handleAnswer = async (event: React.FormEvent) => {
    event.preventDefault();

    if (getAnswer.trim() === "") {
      return;
    }
    
    try {
      const response = await urlAxios.get(`/product/questions/answers/:id`);
      setAnswers(response.data);
      setGetAnswer("");
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleAnswer}>
        <div className={Style.new}>
          <ul className={Style.ulanswer}>
            {answers &&
              answers.map((answer: any) => (
                <li className={Style.lianswer} key={answer._id}>{answer.body}</li>
              ))}
          </ul>
        </div>
       
      </form>
    </Fragment>
  );
}
