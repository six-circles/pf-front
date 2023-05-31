import { Fragment, useState, useEffect, ReactNode } from "react";
import Style from "./QAS.module.scss";
import { urlAxios } from "../../utils";

interface Answer {
  body: ReactNode;
  question: any;
  id: number;
}

export function Answer(props: any) {
  const [answers, setAnswers] = useState<Answer[]>([]);

  useEffect(() => {
    handleAnswer();
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