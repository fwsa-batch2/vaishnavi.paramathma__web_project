function submithandler() {
    event.preventDefault(event);
    
    let emailid = document.getElementById("mail").value;
    let password = document.getElementById("password").value;

    console.log(emailid);
    console.log(password);
    let currentuser = JSON.parse(localStorage.getItem("userdetails"));


let userexist = false;

 for(let i=0; i<currentuser.length; i++){
    let useremail = currentuser[i].email;
    let userpassword = currentuser[i].password;
 
    if(useremail==emailid && userpassword==password){
        userexist = true;
        localStorage.setItem("loggeduser",emailid);
        
        break;
    }
}
    if(!userexist){
    
        document.getElementById("error").innerHTML="invalid emailid or password";
        return null;
    }
}