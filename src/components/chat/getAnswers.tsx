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

export function Answer(props: any) {
  //const [questions, setQuestions] = useState<Question[]>([]);
  // const { token, config } = getToken();
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [newAnswer, setNewAnswer] = useState("");
  const { id } = useParams();
  const [getAnswer, setGetAnswer] = useState("");
  
  const newAnswerObj = {
    body: newAnswer,
    questionId: props.id,
  };

  useEffect(() => {
    handleAnswer();
  }, []);

  const handleAnswer = async () => {
    try {
      const responses = await urlAxios.get(`/product/questions/answers/${props.id}`);
      setAnswers(responses.data);
      setGetAnswer("");
      console.log(responses);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  

  return (
    <Fragment>
   
        <div className={Style.new}>
          <ul className={Style.ulanswer}>
            {answers &&
              answers?.map((answer: any) => (
                <li className={Style.lianswer} key={answer._id}>
                  {answer.body}
                </li>
              ))}
          </ul>
          
        </div>
      
    
    </Fragment>
  );
}