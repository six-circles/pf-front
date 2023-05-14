
interface Form{
    password:string
    email:string
}
export default function validation(form:any){
    const error:Form={
        password:"",
        email:""
    }
    if(form.password !== form.repeatPassword){
        error.password="Las contraseñas tienen que coincidir"
        
    }else if(form.password.length < 8 || form.password.length > 16){
        error.password="Debe contener entre 8 y 16 caractéres"
    } else if(!/\d/.test(form.password)){
        error.password="Debe contener al menos un número"
    }
    else if(!/[A-Z]+/.test(form.password)){
        error.password="Debe contener al menos una mayúscula"
    }
    else{
        error.password=""
    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.com(.\w{2})?$/.test(form.email) || form.email === ""){
        error.email=""
    }else{
        error.email="Email invalido"
    }
    
return error
}
