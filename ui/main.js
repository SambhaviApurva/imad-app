
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
     // create a request object
    var request=new XMLHttpRequest();
    // capture a request and store it in variable 
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
               console.log('user logged in');
               alert('logged in successfully');
            }
            else if(request.status === 403){
                alert('username/password is incorrect');
            } else if(request.status === 500) {
                alert('something went wrong on the server');
            }
        }
        //not yet done
    };
    //make a request 
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://gorthiuma.imad.hasura-app.io/login',true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username , password: password}));
};