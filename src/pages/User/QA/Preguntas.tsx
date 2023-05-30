import { useState } from "react";
import { QuestionUser, Questionmyuser } from "../../../components";
import style from './Preguntas.module.scss';

export default function Preguntas() {
  const [showQuestionUser, setShowQuestionUser] = useState(true);

  const handleToggleComponent = (value:any) => {
    setShowQuestionUser(value === "questionUser");
  };

  return (
    <div>
      <button
        className={style.optiondetail}
        onClick={() => handleToggleComponent("questionUser")}
        style={{ fontWeight: showQuestionUser ? "bold" : "normal" }}
      >
        Preguntas Recibidas
      </button>
      
      <button
        className={style.optiondetail}
        onClick={() => handleToggleComponent("questionMyUser")}
        style={{ fontWeight: !showQuestionUser ? "bold" : "normal" }}
      >
        Mis Preguntas
      </button>
      {showQuestionUser ? <QuestionUser /> : <Questionmyuser />}
    </div>
  );
}
 