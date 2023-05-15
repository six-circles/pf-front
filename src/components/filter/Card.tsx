class Card {
    private title: string;
    private content: string;
    private comments: string[];
  
    constructor(title: string, content: string) {
      this.title = title;
      this.content = content;
      this.comments = [];
    }
  
    addComment(comment: string) {
      this.comments.push(comment);
    }
  
    displayCard() {
      console.log(`Title: ${this.title}`);
      console.log(`Content: ${this.content}`);
      console.log("Comments:");
      for (const comment of this.comments) {
        console.log(`- ${comment}`);
      }
    }
  }
  
  // Ejemplo de uso
  const card = new Card("Sample Card", "This is the content of the card.");
  
  // Agregar comentarios
  card.addComment("Great card!");
  card.addComment("Nice job!");
  
  // Mostrar tarjeta con comentarios
  card.displayCard();
  