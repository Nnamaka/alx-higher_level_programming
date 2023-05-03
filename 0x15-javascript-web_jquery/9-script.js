$(document).ready(()=>{
	$.agax({
		type: 'GET',
		url: 'https://fourtonfish.com/hellosalut/?lang=fr',
		success: (message)=>{
			$('DIV#hello').append(message.hello);
		}
	});
});
