// import "./comments.scss";
import { Rating } from "../..";
// import CommentList from "./CommentsList";

function Comments({ comments }: { comments: object[] }) {
  return (
    <div className="card" id="reviews">
      <div className="comments">
        <div className="comment-react"></div>
        <div>
          {comments?.map((item: any, i) => (
            <div key={i}>
              <strong>{item.userName}</strong>

              <p>{item.body}</p>
              <Rating punctuation={item.punctuation} />
              <br />
            </div>
          ))}
          <div>{/* <CommentList/> */}</div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
