//counter
var button=document.getElementById('counter');

button.onclick = function()
{
    // create a request object
    var request=new XMLHttpRequest();
    // capture a request and store it in variable 
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
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

var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit = document.getElementById('submit_btn');
submiti.onclick = function(){
    //make a request to the server 
    
    // capture a list of names and render it as the list
    var names = ['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++){
        list+= '<li' + names[i] + '</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTMl = list;
};