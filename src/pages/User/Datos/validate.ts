interface Form {
  password: string
  email: string
  birthday: string
}

export const validateField = (form: Credentials, err: any): object => {
  const errors: any = { ...err }

  const error: Form = {
    password: "",
    email: "",
    birthday: "",
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
  const añoActual = new Date().getFullYear()
  const edad = añoActual - yearForm

  if (edad < 14 || edad > 100) {
    error.birthday = "Debe ser mayor de 14 años para registrarse "
  }


  return error

  // if (form.email) {
  //   if (form.email === "") {
  //     errors.email = "Por favor, ingresa un correo electrónico.";
  //   } else errors.email = "";
  // }

  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // if (form.email) {
  //   if (!emailRegex.test(form.email)) {
  //     errors.email = "Por favor, ingresa un correo electrónico válido.";
  //   } else errors.email = ""
  // }
  // if (form.password) {
  //   if (form.password.length < 6) {
  //     errors.password = "La contraseña debe tener al menos 6 caracteres.";
  //   } else errors.password = ""
  // }

  // return errors;
};



export const firstValidateField = (form: Credentials, err: any): object => {
  const errors: any = { ...err }

  // if (form.email === "") {
  //   errors.email = "Por favor, ingresa un correo electrónico.";
  // } else errors.email = "";

  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // if (!emailRegex.test(form.email)) {
  //   errors.email = "Por favor, ingresa un correo electrónico válido.";
  // } else errors.email = ""

  // if (form.password.length < 6) {
  //   errors.password = "La contraseña debe tener al menos 6 caracteres.";
  // } else errors.password = ""
  // return errors;
};