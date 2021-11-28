$(window).on('scroll' , function(){
    if($(window).scrollTop()){
        $('.nav-1').addClass('black')
    }
    else{
          $('.nav-1').removeClass('black')
    }
})
function validation(){
    var name = document.getElementById("name").value 
    var email = document.getElementById("email").value
    var msg = document.getElementById("error")
    msg.style.backgroundColor ="red";
    msg.style.color ="white";
    msg.style.transition ="0.5s";
    var text;
    if(name == ""){
        text ="enter the name"
        msg.innerHTML =text;
        return false
    }else if
    (email.indexOf("@")==-1){
        text ="please enter the email";
        msg.innerHTML =text;
        return false
    }
}







