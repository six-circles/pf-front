import React, { Fragment, useState, useEffect, ReactNode } from "react";
import "./QA.scss";
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

export function Answers() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const { id } = useParams();
  //const { token, config } = getToken();

 

  const handleAnswers = async () => {
    try {
      const get = await urlAxios.get(`/product/questions/answers/${id}`);
     console.log(get.data);
      setAnswers([...get.data]);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    //handleQuestion();
    handleAnswers();
  }, []);

  return (
    <Fragment>
      <div className="card">
        <center>
          <h1>Respuestas</h1>
        </center>
        <br />
              <ul>
                {answers &&
                  answers?.map((answer:any) => (
                    <li key={answer._id}>{answer.body}</li>
                  ))}
              </ul>
      </div>
    </Fragment>
  );
}
