import React, { Fragment, useState, useEffect } from "react";
import Style from "./QAS.module.scss";
import { Link, useParams } from "react-router-dom";
import { getToken, urlAxios } from "../../utils";
interface Question {
  id: number;
  text: string;
}

export function Questionmyuser(props: any) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [getQuestion, setGetQuestion] = useState("");

  const { id } = useParams();
  const { token, config } = getToken();

  const handleQuestion = async () => {
    try {
      const get = await urlAxios.get(`/questions/${token}`, config);

      console.log(get.data);
      setQuestions([...get.data]);
      console.log(questions);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    handleQuestion();
  }, []);
  return (
    <Fragment>
      <div className={Style.card}>
        <br />
        <br />
        <ul className={Style.ulquestion}>
        
          <br />
          {questions &&
            questions?.map((question: any) => (
              <>
              <strong>
              <Link to={`/detail/${question?.product[0]?._id}`} className={Style.aproduct}>{question?.product[0]?.title}</Link></strong>
              <li key={question._id}>{question.body}</li>
              </>
            ))}
          <br />
          
        </ul>
        <br />
      </div>
    </Fragment>
  );
}
 