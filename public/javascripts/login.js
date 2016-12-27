$(document).ready(function(){
    var username, email, password;
    $("#submit").click(function() {
        console.log("clicked");
        username = $("#user").val();
        email = $("#email").val();
        password = $("#password").val();
        /*
         * Perform some validation here.
         */
        $.post("http://localhost:3000/signin",{username: username, email:email,pass:password}, function(data){
            if(data === 'done') {
                window.location.href="/loggedin";
            }
        });
    });
});