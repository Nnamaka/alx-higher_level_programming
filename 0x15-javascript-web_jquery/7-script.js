$(document).ready(()=>{
	$.ajax({
		type: 'GET',
		url: 'https://swapi-api.alx-tools.com/api/people/5/?format=json',
		success: (message)=>{
			$('DIV#character').text(message.name);
		}
	});
});
