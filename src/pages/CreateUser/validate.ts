
interface Form{
    password:string
}
export default function validation(form:any){
    const error:Form={
        password:""
    }
    if(form.password !== form.repeatPassword){
        error.password="las contraseñas tienen que coincidir"
        
    }
    else{
        error.password=""
    }
    console.log("pass: ",form.password)
    console.log("passRep: ",form.repeatPassword)
return error
}