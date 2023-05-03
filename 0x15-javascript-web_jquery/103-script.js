$(document).ready(function () {
  function translate () {
    $('DIV#hello').empty();
    const len = $('INPUT#language_code').val();
    $.ajax({
      type: 'GET',
      url: 'https://fourtonfish.com/hellosalut/?lang=' + len,
      success: (message)=>{
        $('DIV#hello').append(message.hello);
      }
    });
  }
  $('INPUT#btn_translate').click(()=>{
    translate();
  });
  $('INPUT#language_code').keypress((event)=>{
    const key = event.which;
    if (key === 13) {
      translate();
    }
  });
});
