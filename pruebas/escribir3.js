function escribime(){
	
texto = document.getElementById('ejemplo').innerHTML + '<br/><br/>' + document.getElementById('escribiendo').value;
document.getElementById('ejemplo').innerHTML = texto;
document.getElementById('escribiendo').value = '';


 return false;
}