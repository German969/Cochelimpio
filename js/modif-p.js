function modp(fila) {
	
	v1 = document.getElementById('f' + fila + 'c2').innerHTML;
	v2 = document.getElementById('f' + fila + 'c3').innerHTML;
	v3 = document.getElementById('f' + fila + 'c4').innerHTML;
	
	document.getElementById('f' + fila + 'c2').innerHTML = '<input type="text" id="vf' + fila + 'c2" value="' + v1 + '"/>';
	document.getElementById('f' + fila + 'c3').innerHTML = '<input type="text" id="vf' + fila + 'c3" value="' + v2 + '"/>';
	document.getElementById('f' + fila + 'c4').innerHTML = '<input type="text" id="vf' + fila + 'c4" value="' + v3 + '"/>';
	document.getElementById('M' + fila).innerHTML = '<input type="button" class="btn btn-primary" value="Aceptar" onclick="yata(' + fila + ')">';
	
}