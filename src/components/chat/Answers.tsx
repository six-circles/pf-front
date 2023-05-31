import React, { Fragment, useState, useEffect, ReactNode } from "react";
import Style from "./QAS.module.scss";
import { useParams } from "react-router-dom";
import { getToken, urlAxios } from "../../utils";

interface Question {
  id: number;
  text: string;
}

interface Answer {
  body: ReactNode;
  questionId: number;
  id: number;
}

export function Answers(props: any) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [newAnswer, setNewAnswer] = useState("");
  const { token, config } = getToken();
  const { id } = useParams();
  const [answered, setAnswered] = useState(false);

  const newAnswerObj = {
    body: newAnswer,
    questionId: props.id,
  };

  useEffect(() => {
    handleAnswer();
    checkAnswered();
  }, []);

  const handleAnswer = async () => {
    try {
      const responses = await urlAxios.get(`/product/questions/answers/${props.id}`);
      setAnswers(responses.data);
      console.log(responses);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const handleAnswerSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (newAnswer.trim() === "") {
      return;
    }

    try {
      console.log(newAnswerObj);
      const response = await urlAxios.post("/product/questions/answers", newAnswerObj, config);

      setNewAnswer("");
      setAnswered(true);
      localStorage.setItem(`answered_${props.id}`, JSON.stringify(newAnswerObj));

      handleAnswer();
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const checkAnswered = () => {
    const answeredQuestion = localStorage.getItem(`answered_${props.id}`);

    if (answeredQuestion) {
      setAnswered(true);
    }
  };

  if (answered) {
    return null;
  }

  return (
    <Fragment>
      {!answered && (
        <form onSubmit={handleAnswerSubmit}>
          <div className={Style.new}>
            <ul className={Style.ulanswer}>
              <br />
              {answers &&
                answers
                  .filter((answer) => answer.questionId === props.id)
                  .map((answer: any) => (
                    <li className={Style.lianswer} key={answer._id}>
                      {answer.body}
                    </li>
                  ))}
              <br />
            </ul>
            <input
              className={Style.inputanswer}
              type="text"
              value={newAnswer}
              onChange={(event) => setNewAnswer(event.target.value)}
              placeholder="Escribe tu respuesta"
            />
          </div>
          <button className={Style.answersubmit} type="submit">
            Enviar
          </button>
        </form>
      )}
    </Fragment>
  );
}

