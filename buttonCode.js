var url = 'https://together.azure-api.net/democalc/subtract?a=';
url += form.submission.data.a;
url += '&b=';
url += form.submission.data.b;
		
//Get token from cached
var apiToken = angular.element(document.getElementById('calcFormIO')).scope().getToken2();
		
//Very Important for Token for use API
url += '&id_token='+apiToken;
console.log('URL before sending = '+url);
		
$.ajax({
    url: url,
    beforeSend: function(xhrObj){
         //Request headers
    },
    type: "GET"
}).done(function(data){
      
	form.submission = { data: {
        a: form.submission.data.a,  
        b: form.submission.data.b,
        result: data.value
    }};  
}).fail(function(err){
    console.log(err)
});