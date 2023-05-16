import React, { useState } from 'react'

    interface Comment {
        id: number;
        text: string;
      }
      
      function CommentList(props:any) {
        const [comments, setComments] = useState<Comment[]>([]);
        const [newComment, setNewComment] = useState('');
      
        const handleCommentSubmit = (event: React.FormEvent) => {
          event.preventDefault();
      
          if (newComment.trim() === '') {
            return;
          }
      
          const newCommentObj: Comment = {
            id: comments.length + 1,
            text: newComment
          };
      
          setComments([...comments, newCommentObj]);
          setNewComment('');
        };
      console.log(props.comments);
      return (
        <div >
        
          <div className='view'>
           {props?.comments&& props?.comments.map((item:any,index:any)=>(
            <div key={index}>
              <p>{item.userName}</p>
            <p >{item.body}</p>
            </div>
           ))}
          </div>
           <br />
          <form onSubmit={handleCommentSubmit}>
            <div className='new'>
            <input className='new'
              type="text"
              value={newComment}
              onChange={event => setNewComment(event.target.value)}
              placeholder="Escribe tu comentario"
            />
            </div>
            <br />
            <div className='send'>
            <button  className='send' type="submit">Publicar comentario</button>
          </div>
          </form>
    
          <ul>
            {comments.map(comments => (
              <li key={comments.id}>{comments.text}</li>
            ))}
          </ul>
        </div>
      );
    }
export default CommentList;