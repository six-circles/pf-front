import React, { useState } from "react";
import { getToken, urlAxios } from "../../../utils";
import { useParams } from "react-router-dom";
import "./comments.scss";
import { Calificar } from "../..";
interface Comment {
  id: number;
  text: string;
}

function CommentList(props: any) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(0);
  const { token, config } = getToken();
  const { id } = useParams();
  const handleCommentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (newComment.trim() === "") {
      return;
    }

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
      setNewComment("");
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  //setComments([...comments, newCommentObj]);

  console.log(rating);

  return (
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
        </div>
        <br />
        <div className="send">
          <button className="send" type="submit">
            Publicar comentario
          </button>
        </div>
      </form>

      <ul>
        
      </ul>
    </div>
  );
}
export default CommentList;
