interface Credentials {
  name: string;
  email: string;
  phone: string;
  birthday: string;
  password: string;
  repeatPassword: string;
  address: string;
  // address2: string,
  // card: string,
}

export const validateField = (form: Credentials, err: any): object => {
  const error: any = { ...err };

  if (form.password) {
    if (form.password.length < 8 || form.password.length > 16) {
      error.password = "Debe contener entre 8 y 16 caractéres";
    } else if (!/\d/.test(form.password)) {
      error.password = "Debe contener al menos un número";
    } else if (!/[A-Z]+/.test(form.password)) {
      error.password = "Debe contener al menos una mayúscula";
    } else if (form.password !== form.repeatPassword) {
      error.password = "Las contraseñas tienen que coincidir";
    } else {
      error.password = "";
    }
  }

  if (form.email) {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.com(.\w{2})?$/.test(form.email) ||
      form.email === ""
    ) {
      error.email = "";
    } else {
      error.email = "Email invalido";
    }
  }

  if (form.address) {
    if (form.address === "") {
      error.address = "Debes añadir dirección";
    } else {
      error.address = "";
    }
  }

  const yearForm: any = form.birthday.slice(0, 4);
  const añoActual = new Date().getFullYear();
  const edad = añoActual - yearForm;
  if (edad < 14) {
    error.birthday = edad + "Debe ser mayor de 14 años para registrarse ";
  } else if (edad > 100) {
    error.birthday = "Edad incorrecta";
  } else error.birthday = "";

  return error;
};
