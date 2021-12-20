let data = [];
function onPageLoad(){
    const listValue=JSON.parse(localStorage.getItem("userdetails"));
    if(listValue!=null){
       data=listValue
    }
}
onPageLoad();
function submitFunction() {
   
    event.preventDefault();
    console.group("submitfunction")
    console.log("show group end")
    let firstname = document.getElementById("fname").value;
    let secondname = document.getElementById("sname").value;
    let email = document.getElementById("mail").value;
    let dateofbirth = document.getElementById("dob").value;
    let password = document.getElementById("createpassword").value;
    let confirmpassword = document.getElementById("confirmpassword").value;


    

    let userEmaildetails = isEmailAlreadyExist(email);

    if (password != confirmpassword) {
       alert("Password incorrect");
    }
    else if(userEmaildetails){
        alert("email is exists");
    }
    else{
        let userdetails = {
            "firstName": firstname,
            "secondName": secondname,
            "email": email,
            "dob": dateofbirth,
            "password": password,
            "confirmPassword": confirmpassword
        }
        data.push(userdetails) // obj
     const customerlist = JSON.stringify(data);
     localStorage.setItem("userdetails",customerlist );
     console.groupEnd("submitfunction");
    //  window.location.href="./../pages/login.html"
     
    } 
}
    function isEmailAlreadyExist(currentemail){
     let used = false;
      for( let i=0;i<data.length;i++){
          const google = data[i].email;
          if(currentemail == google){
            used = true;
            break;
          }
      }

      return used;

    }
    
onPageLoad();