import { useState } from "react";
import { Answers, QuestionUser, Questionmyuser } from "../../../components";
import { Questions } from "../../../redux/actions/productActions.";
import { useSelector } from "react-redux";


export default function preguntas (){
    
   
    return(
    <>
    <QuestionUser/>
    <Questionmyuser/>
    </>
    );
}   