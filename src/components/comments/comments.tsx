 function Comments(){

type Comment = {
    author: string;
    content: string;
  };
  
  class CommentSection {
    comments: Comment[];
  
    constructor() {
      this.comments = [];
    }
  
    addComment(author: string, content: string) {
      const comment: Comment = { author, content };
      this.comments.push(comment);
    }
  
    displayComments() {
      for (const comment of this.comments) {
        console.log(`Author: ${comment.author}`);
        console.log(`Content: ${comment.content}`);
        console.log("--------------");
      }
    }
  }
  // Ejemplo de uso
  const commentSection = new CommentSection();
  
  // Agregar comentarios
  commentSection.addComment("John", "Great article!");
  commentSection.addComment("Emily", "I disagree with some points.");
  
  // Mostrar comentarios
  commentSection.displayComments();
  return (
    <div>
      <h1>probando</h1>
    </div>

 )
}

export default Comments;