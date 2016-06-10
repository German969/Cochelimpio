$(document).ready(function() {
	$('#botoncito').click(function(e) {
		e.preventDefault
		ayn=(document.getElementById('nombrecito')).value
		mail=(document.getElementById('emailcito')).value
		msj=(document.getElementById('textito')).value
		cond1= (ayn == null || ayn.length == 0 || /^\s+$/.test(ayn))
		cond2= (mail == null || mail.length == 0 || /^\s+$/.test(mail))
		cond3= (msj == null || msj.length == 0 || /^\s+$/.test(msj))
		cond4= cond1&&cond2&&cond3
		if (cond4) {
			window.location = 'prueba-mensaje3.html'
		} else{
			window.location = 'prueba-mensaje2.html'
		};
	})
})
