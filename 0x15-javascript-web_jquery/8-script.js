$(document).ready(()=>{
	$.ajax({
		type: 'GET',
		url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
		success: (message)=>{
			$.each(message.results, (i, movies)=>{
				$('UL#list_movies').append('<li>'+movies.title +'</li>');
			})
		}
	});
});
