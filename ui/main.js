//counter
var button=document.getElementById('counter');

button.onclick = function()
{
    // make a request to catch endpoint
    var request=new XMLHttpRequest();
    // capture a request and store it in variable 
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            //take some action
            if(request.status == 200){
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    
        //not yet done
    };
    //render the variable in the correct span
    response.open('GET','http://gorthiuma.imad.hasura-app.io/counter',true);
    response.send(null);
};