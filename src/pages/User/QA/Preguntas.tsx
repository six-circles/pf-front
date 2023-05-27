import React, { useState } from "react";
import { QuestionUser, Questionmyuser } from "../../../components";
import style from './Preguntas.module.scss'
export default function Preguntas() {
  const [showQuestionUser, setShowQuestionUser] = useState(true);

  const handleToggleComponent = () => {
    setShowQuestionUser((prevState) => !prevState);
  };

  return (
    <div>
      <a className={style.optiondetail} onClick={handleToggleComponent}>
         {showQuestionUser ? "Mis Preguntas" : "Preguntas recibidas"}
      </a>
      {showQuestionUser ? <QuestionUser /> : <Questionmyuser />}
    </div>
  );
}  