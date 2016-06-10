function validacion() {
  valor = document.getElementById("nombrecito").value;
  valor2 = document.getElementById("emailcito").value;
  valor3 = document.getElementById("textito").value;
  if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo "nombre" no debe estar vacio');
    return false;
  }
  
  else if (valor2 == null || valor2.length == 0 || /^\s+$/.test(valor2)) {
    // Si no se cumple la condicion...
    alert('[ERROR] El campo "email" no debe estar vacio');
    return false;
  }
  
   else if (valor3 == null || valor3.length == 0 || /^\s+$/.test(valor3)) {
    // Si no se cumple la condicion...
    alert('[ERROR] El mensaje no debe estar vacio');
    return false; 
   } 
   
	alert('Su mensaje ha sido enviado con éxito.');
    return true;
  
}