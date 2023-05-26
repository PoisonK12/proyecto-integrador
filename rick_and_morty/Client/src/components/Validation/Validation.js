const validation = (userData) => {
  const errors = {}

  if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(userData.email)) {
    errors.email = 'El email es inválido';
  }
  if(!userData.email) {
    errors.email = 'Donde ves un email aqui? Sapo.';
  }
  if(userData.email.length > 35) {
    errors.email = 'El email es demasiado largo';
  }
  
  if(!/.*\d+.*/i.test(userData.password)) {
    errors.password = 'El password no es valido'
  }
  if(userData.password.length < 6 || userData.password.length > 10) {
    errors.password = 'La clave debe tener entre 6 y 10 caracteres'
  }  
  return errors;

}

export default validation;