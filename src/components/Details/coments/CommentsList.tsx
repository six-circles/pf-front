import { useState } from "react";
import { getToken, urlAxios } from "../../../utils";
import styles from "./comments.module.scss"
import { Calificar } from "../..";
import Swal from "sweetalert2";
interface Comment {
  id: any;
  text:string;
}
interface State{
  id:string,
  setPuntuacion:Function,
  name:string
}

function CommentList(props:State) {
  const {id}=props
  const {setPuntuacion}=props
  const{name}=props
  
  const [comments, setComments] = useState<Comment[]>([]);
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
      const response = await urlAxios.post(
        "/product/comments",
        newCommentObj,
        config
      );
      console.log(response);
      setComments([...comments, { id: comments.length + 1, text: newComment }]);
      setNewComment(" ");
      puntuationDone()
      setPuntuacion(false)
    } catch (error: any) {
      console.log(error.response.data);
      Swal.fire({
        position: "center",
        icon:"error",
        title: "Producto ya calificado/faltan datos",
        showConfirmButton: true,
      })
      setPuntuacion(false)

    }

  };
  const [enviado,setEnviado]=useState(false)
  const puntuationDone=()=>{
    setEnviado(true)
  }
  return (
<<<<<<< HEAD
    <div>
      <div className="view">
        
        {props?.comments &&
          props?.comments.map((item: any, index: any) => (
            <div key={index}>
              <p>{item.userName}</p>
              <p>{item.body}</p>
            </div>
          ))}
      </div>
      <br />
      <form onSubmit={handleCommentSubmit}>
        <div className="new">
          {/* <input type="number" value={rating} onChange={(event:any) => setRating(event.target.value)} min={0} max={5}/> */}
          <Calificar setState={setRating} />
          <input
            className="new"
            type="text"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            placeholder="Escribe tu comentario"
          />
=======
    <div >
      
     
        {enviado? (<div><h1>Comentario enviado!</h1></div>  ) : (
        <div className={styles.contenedor}>
          <div>
            <p className={styles.title}>Deja tu puntuación al producto: {name}</p>
           
            <Calificar setState={setRating} />
            <input
              className={styles.input}
              type="text"
              value={newComment}
              onChange={(event) => setNewComment(event.target.value)}
              placeholder="Escribe tu comentario"
            />
            <button className={styles.buttonSend} onClick={handleCommentSubmit} id="submit">
              Publicar comentario
            </button>
            <button onClick={()=>setPuntuacion(false)} className={styles.buttonX}>X</button>
          </div>
          
>>>>>>> develop
        </div>
      )
        
        }

<<<<<<< HEAD
      <ul>
        
      </ul>
=======
>>>>>>> develop
    </div>
  );
}
export default CommentList;