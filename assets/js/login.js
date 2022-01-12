function submithandler(event) {
    event.preventDefault();
    
    let emailid = document.getElementById("mail").value;
    let password = document.getElementById("password").value;

    console.log(emailid);
    console.log(password);
    let currentuser = JSON.parse(localStorage.getItem("userdetails"));


let userexist = false;

 for(let i of currentuser){
    let useremail = i.email;
    let userpassword = i.password;
 
    if(useremail==emailid && userpassword==password){
        userexist = true;
        localStorage.setItem("loggeduser",emailid);
      alert("logged in succesfully");
      window. location.href = "./../index.html"
        break;
    }
}
    if(!userexist){
    
        alert("invalid emailid or password");
        return null;
    }
}
