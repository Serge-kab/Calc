var boutonCalc = document.querySelector('.bouton_calc');
var txtArea = document.getElementById('displaystr');
var envoyer = document.getElementById('Envoyer');
var displayResult = document.getElementById('displayresult');


function display(e) //Display the value of the clicked button into the textarea
{	
	if(e.target.value !=="=")
	{
		txtArea.value+=e.target.value; 
	}
}
document.addEventListener("DOMContentLoaded", function(){ //On utilise DOMContentLoaded pour vider les champs au chargement de la page
	
txtArea.value=""; //Empty the form fields on page load
displayResult.value="";

boutonCalc.addEventListener('click', display); //Call the display function when numbers or operators are clicked
envoyer.addEventListener('click', function() //When the equal sign is clicked, we use the eval function to get the result, and then display it in the form fields.
{
	displayResult.value=eval(txtArea.value); 
	txtArea.value=displayResult.value; 
});
});

