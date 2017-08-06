//counter
var button=document.getElementById('counter');

button.onclick = function()
{
    // create a request object
    var request=new XMLHttpRequest();
    // capture a request and store it in variable 
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML = counter.toString();
            }
            //not yet done
        }
    };
    //make a request 
    request.open('GET','http://gorthiuma.imad.hasura-app.io/counter',true);
    request.send(null);
};