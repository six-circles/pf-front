import React, { Fragment, useEffect, useState } from "react";
import Style from "./QA.module.scss";
import { getToken, getUserRemote, urlAxios } from "../../../utils";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../../redux/actions/productActions.";
import { useDispatch } from "react-redux";

interface Question {
  id: number;
  text: string;
}

export function QuestionList(props: any) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [isUser, setIsUser] = useState(false);
  const { id } = useParams();
  const { token, config } = getToken();
  const dispatch: any = useDispatch();

  const handleQuestionSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (newQuestion.length > 0 && !isUser) {
      const body = { token, productId: id, body: newQuestion };
      try {
        await urlAxios.post("/product/questions", body, config);
        //await urlAxios.get(`/product/questions/${id}`);
        dispatch(getProductDetail(id));
        setQuestions([
          ...questions,
          { id: questions.length + 1, text: newQuestion },
        ]);

        setNewQuestion("");
      } catch (error: any) {
        console.log(error.response.data);
      }
    }
  };

  const compareUser = async () => {
    const { id } = await getUserRemote();

    if (id === props.user) setIsUser(true);
    else setIsUser(false);
  };

  useEffect(() => {
    compareUser();
  }, []);

  return (
    <Fragment>
      
        <div className={Style.view}>
          <br />
          <div></div>
          {props?.questions &&
            props?.questions.map((item: any, index: any) => (
              <div key={index}>
                <strong>
                  <p className={Style.username}>{item.userName}</p>
                </strong>
                <br />
                <p className={Style.bodyuser}>{item.body}</p>
                <br />
                <strong>
                  <p className={Style.bodyanswer}>{item.answer}</p>
                </strong>

                <br />
              </div>
            ))}
        </div>
        <br />
        {!isUser && (
          <form onSubmit={handleQuestionSubmit}>
            <div className={Style.new}>
              <input
                className={Style.newinput}
                type="text"
                value={newQuestion}
                onChange={(event) => setNewQuestion(event.target.value)}
                placeholder="Escribe tu pregunta"
              />
            </div>
            <br />
          </form>
        )}
        
    </Fragment>
  );
}
