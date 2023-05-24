import { useState } from "react";
import { getToken, urlAxios } from "../../../utils";
import styles from "./comments.module.scss";
import { Calificar } from "../..";
import Swal from "sweetalert2";
interface State {
  id: string;
  setPuntuacion: Function;
  name: string;
}

function CommentList(props: State) {
  const { id } = props;
  const { setPuntuacion } = props;
  const { name } = props;

  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);
  const { token, config } = getToken();

  const handleCommentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newCommentObj = {
      productsId: id,
      body: newComment,
      punctuation: rating,
      token,
    };
    try {
      console.log(newCommentObj);
      const response = await urlAxios.post(
        "/product/comments",
        newCommentObj,
        config
      );
      console.log(response);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Puntuación enviada",
        showConfirmButton: false,
        timer: 1000,
      });
      setNewComment(" ");
      puntuationDone();
      setPuntuacion(false);
    } catch (error: any) {
      console.log("mensajes", error.response.data);
      console.log(newCommentObj);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Puntuación ya realizada",
        showConfirmButton: true,
      });
      setPuntuacion(false);
    }
  };
  const [enviado, setEnviado] = useState(false);

  const puntuationDone = () => {
    setEnviado(true);
  };

  return (
    <div>
      {enviado ? (
        <div>
          <h1>Comentario enviado!</h1>
        </div>
      ) : (
        <div className={styles.contenedor}>
          <div>
            <p className={styles.title}>
              Deja tu puntuación al producto: {name}
            </p>
            <div className={styles.raiting}>
              <Calificar setState={setRating} />
            </div>
            <input
              className={styles.input}
              type="text"
              value={newComment}
              onChange={(event) => setNewComment(event.target.value)}
              placeholder="Escribe tu comentario"
            />
            <button className={styles.buttonSend} onClick={handleCommentSubmit}>
              Publicar comentario
            </button>
<<<<<<< HEAD
          </div>
            <div className={styles.contX}>
            <button onClick={()=>setPuntuacion(false)} className={styles.buttonX}>X</button>
            </div>
          
=======
            <div>
              <button
                onClick={() => setPuntuacion(false)}
                className={styles.buttonX}
              >
                X
              </button>
            </div>
          </div>
>>>>>>> develop
        </div>
      )}
    </div>
  );
}
export default CommentList;
