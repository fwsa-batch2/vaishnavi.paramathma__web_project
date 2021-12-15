function submithandler() {
    event.preventDefault();
    
    let emailid = document.getElementById("mail").value;
    let password = document.getElementById("password").value;

    console.log(emailid);
    console.log(password);
    let currentuser = JSON.parse(localStorage.getItem("userdetails"));
let detaillist = currentuser.length;

let userexist = false;

for(i=0; i<detaillist; i++){
    let useremail = currentuser[i].email;
    let userpassword = currentuser[i].password;
 
    if(useremail==emailid && userpassword==password){
        userexist = true;
        localStorage.setItem("loggeduser",emailid);
        // alert("successfully logged");
        break;
    }
}
    if(!userexist){
    
        document.getElementById("error").innerHTML="invalid emailid or password";
        return null;
    }
}