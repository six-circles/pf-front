import Swal from "sweetalert2";

interface Form {
    password: string
    email: string
    birthday: number
}
export default function validation(form: any) {
    const error: Form = {
        password: "",
        email: "",
        birthday: 0,
    }
    if (form.password !== form.repeatPassword) {
        error.password = "Las contraseñas tienen que coincidir"

    } else if (form.password.length < 8 || form.password.length > 16) {
        error.password = "Debe contener entre 8 y 16 caractéres"
    } else if (!/\d/.test(form.password)) {
        error.password = "Debe contener al menos un número"
    }
    else if (!/[A-Z]+/.test(form.password)) {
        error.password = "Debe contener al menos una mayúscula"
    }
    else {
        error.password = ""
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.com(.\w{2})?$/.test(form.email) || form.email === "") {
        error.email = ""
    } else {
        error.email = "Email invalido"
    }
    const yearForm: number = form.birthday.slice(0, 4)
    const añoForm = new Date().getFullYear()
    if (yearForm >= añoForm) {
        // alert(`Ingrese una fecha menor a ${añoForm}`)
        Swal.fire({
            icon: "info",
            title: `Ingrese una fecha menor a ${añoForm}`,
        });
    }

    return error
}
