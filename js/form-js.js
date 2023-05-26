window.addEventListener('load', () => {
  const form = document.querySelector('#form-js')
  const nombre = document.getElementById('names')
  const apellido = document.getElementById('lastname')
  const telefono = document.getElementById('phone')
  const documento = document.getElementById('dni')
  const comensales = document.getElementById('subjets')
  const fecha = document.getElementById('date')
  const hora = document.getElementById('time')
  const sucursal = document.getElementById('location')
  var vacio = document.getElementById("campo vacio");
  var errorNombre = document.getElementById("mayuscula-nombre");
  var errorApellido = document.getElementById("mayuscula-apellido");
  var regex = /[A-Z]/;

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    validacion()
  })
  

  const validacion = () => {
    
    var aviso="";
    if (nombre.value.length === 0 || apellido.value.length === 0 || telefono.value.length === 0 || documento.value.length === 0 || comensales.value.length === 0 || fecha.value.length === 0 || hora.value.length === 0 || sucursal.value.length === 0) {
      vacio.style.display = "block";
      return false;
    } else {
      vacio.style.display = "none";
    }

    if (!regex.test(nombre.value)) {
      errorNombre.style.display = "block";
      return false;
    } else {
      errorNombre.style.display = "none";
    }

    if (!regex.test(apellido.value)) {
      errorApellido.style.display = "block";
      return false;
    } else {
      errorApellido.style.display = "none";
    }


    if (isNaN(telefono.value) || isNaN(documento.value) || isNaN(comensales.value)) {
      alert('El número de identificación y la cantidad de comensales deben ser números.');
      return false;
    }
    return true
  }
});

