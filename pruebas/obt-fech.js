function calcular_edad(fecha){
var selectObject = document.forms['formprueba'].elements['fechan'];
var fecha = selectObject.options[selectObject.selectedIndex].value;
   	alert('feche: '+fecha)
	hoy=new Date()
   	var array_fecha = fecha.split("/")
   	if (array_fecha.length!=3)
      	 return false
   	var ano
   	ano = parseInt(array_fecha[2]);
   	if (isNaN(ano))
      	 return false
   	var mes
   	mes = parseInt(array_fecha[1]);
   	if (isNaN(mes))
      	 return false
   	var dia
   	dia = parseInt(array_fecha[0]);
   	if (isNaN(dia))
      	 return false
   	if (ano<=99)
      	 ano +=1900
	
alert('dia: '+dia)	;
}