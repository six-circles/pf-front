export interface DetailProd {
  answers: any;
  questions: object[];
  _id: string;
  title: string;
  price: 1;
  image: string;
  description: string;
  stock: number;
  comments: object[];
  user:User;
  createdAt: string;
  updatedAt: string;
  __v: number;
  punctuations: number;
  condition: string;
  category: string;
  moreCharacteristics: object;
}

interface User{
  user: string,
  email:string,
  _id:number;
}
