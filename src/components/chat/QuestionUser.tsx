import { Fragment, useState, useEffect } from "react";
import Style from "./QAS.module.scss";
import { Link } from "react-router-dom";
import { getToken, urlAxios } from "../../utils";
import { Answers } from "..";
interface Question {
  id: number;
  text: string;
}

export function QuestionUser() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const { token } = getToken()

  const handleQuestion = async () => {

    try {
      const get = await urlAxios.get(`/${token}/product`);
      setQuestions([...get.data])
    }
    catch (error: any) {
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    handleQuestion();
  }, []);

  return (
    <Fragment>
      <div className={Style.card}>
        <ul className={Style.ulquestion}>
          <br />
          {questions && questions.map((question: any) => (
            question.questions.map((nestedQuestion: any) => (
              <strong><div className={Style.nestedQuestion} key={nestedQuestion._id}>
                <br />
                <br />
                <Link to={`/detail/${question._id}`} className={Style.aproduct}>{question.title}</Link>
                <li >{nestedQuestion.body}</li>
                <br />

                <Answers id={nestedQuestion._id} />
              </div></strong>
            ))
          ))}

          <br />
        </ul><br />

        <br />
      </div>
    </Fragment>
  );
}