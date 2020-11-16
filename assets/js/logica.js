const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  // usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
  ci: /^.{6,8}$/, // 4 a 12 digitos.
  // password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
  ciudad: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
  departamento: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
};

const campos = {
  nombre: false,
  ci: false,
  email: false,
  telefono: false,
  ciudad: false,
  // password:false,
  departamento: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case 'nombre':
      validarCampo(expresiones.nombre, e.target, 'nombre');
      break;

    case 'ci':
      validarCampo(expresiones.ci, e.target, 'ci');
      break;
    case 'email':
      validarCampo(expresiones.correo, e.target, 'email');
      break;
    case 'telefono':
      validarCampo(expresiones.telefono, e.target, 'telefono');
      break;
    case 'ciudad':
      validarCampo(expresiones.ciudad, e.target, 'ciudad');
      break;
    case 'departamento':
      validarCampo(expresiones.departamento, e.target, 'departamento');
      break;
    // case 'password':
    //   validarCampo(expresiones.password, e.target, 'password');
    //   validarPassword2();
    //   break;
    // case 'password2':
    //   validarPassword2();
    //   break;
  }
};
const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove('formulario__grupo-incorrecto');
    document
      .getElementById(`grupo__${campo}`)
      .classList.add('formulario__grupo-correcto');
    document
      .querySelector(`#grupo__${campo} i `)
      .classList.add('fa-check-circle');
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove('fa-times-circle');
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.remove('formulario__input-error-activo');
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo__${campo}`)
      .classList.add('formulario__grupo-incorrecto');
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove('formulario__grupo-correcto');
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add('fa-times-circle');
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove('fa-check-circle');
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.add('formulario__input-error-activo');
    campos[campo] = false;
  }
};

const validarPassword2 = () => {
  const inputPassword = document.getElementById('password');
  const inputPassword2 = document.getElementById('password2');

  if (inputPassword.value !== inputPassword2.value) {
    document
      .getElementById(`grupo__password2`)
      .classList.add('formulario__grupo-incorrecto');
    document
      .getElementById(`grupo__password2`)
      .classList.remove('formulario__grupo-correcto');
    document
      .querySelector(`#grupo__password2 i`)
      .classList.add('fa-times-circle');
    document
      .querySelector(`#grupo__password2 i`)
      .classList.remove('fa-check-circle');
    document
      .querySelector(`#grupo__password2 .formulario__input-error`)
      .classList.add('formulario__input-error-activo');
    campos['password'] = false;
  } else {
    document
      .getElementById(`grupo__password2`)
      .classList.remove('formulario__grupo-incorrecto');
    document
      .getElementById(`grupo__password2`)
      .classList.add('formulario__grupo-correcto');
    document
      .querySelector(`#grupo__password2 i`)
      .classList.remove('fa-times-circle');
    document
      .querySelector(`#grupo__password2 i`)
      .classList.add('fa-check-circle');
    document
      .querySelector(`#grupo__password2 .formulario__input-error`)
      .classList.remove('formulario__input-error-activo');
    campos['password'] = true;
  }
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});
formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  if (
    campos.nombre &&
    campos.ci &&
    campos.departamento &&
    campos.email &&
    campos.telefono &&
    campos.ciudad
  ) {
    sendData();
    document
      .getElementById('formulario__mensaje-exito')
      .classList.add('formulario__mensaje-exito-activo');
    setTimeout(() => {
      document
        .getElementById('formulario__mensaje-exito')
        .classList.remove('formulario__mensaje-exito-activo');
    }, 5000);
    document
      .querySelectorAll('.formulario__grupo-correcto')
      .forEach((icono) => {
        icono.classList.remove('formulario__grupo-correcto');
      });
  } else {
    document
      .getElementById('formulario__mensaje')
      .classList.add('formulario__mensaje-activo');
    setTimeout(() => {
      document
        .getElementById('formulario__mensaje')
        .classList.remove('formulario__mensaje-activo');
    }, 5000);
  }
});
//llamar
function sendData() {
  const email = document.getElementById('correo').value;
  const nombre = document.getElementById('nombre').value;
  const ci = document.getElementById('ci').value;
  const telefono = document.getElementById('telefono').value;
  const ciudad = document.getElementById('ciudad').value;
  const departamento = document.getElementById('departamento').value;
  const data = {
    nombre: nombre,
    ci: ci,
    email: email,
    telefono: telefono,
    ciudad: ciudad,
    // password:false,
    departamento: departamento,
  };

  //ajax
  fetch('https://example.com/profile', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  console.log(data);
  formulario.reset();
}
