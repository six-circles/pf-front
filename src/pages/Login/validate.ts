interface Credentials {
  email: string;
  password: string;
}

export const validateField = (form: Credentials, err: any): object => {
  const errors: any = { ...err }

  if (form.email) {
    if (form.email === "") {
      errors.email = "Por favor, ingresa un correo electrónico.";
    } else errors.email = "";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (form.email) {
    if (!emailRegex.test(form.email)) {
      errors.email = "Por favor, ingresa un correo electrónico válido.";
    } else errors.email = ""
  }
  if (form.password) {
    if (form.password.length < 8) {
      errors.password = "La contraseña debe tener al menos 8 caracteres.";
    } else errors.password = ""
  }

  return errors;
};



export const firstValidateField = (form: Credentials, err: any): object => {
  const errors: any = { ...err }

  if (form.email === "") {
    errors.email = "Por favor, ingresa un correo electrónico.";
  } else errors.email = "";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(form.email)) {
    errors.email = "Por favor, ingresa un correo electrónico válido.";
  } else errors.email = ""

  if (form.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres.";
  } else errors.password = ""
  return errors;
};