let array = []
        function submithandler(event) {
            event.preventDefault();

            let name = document.getElementById("fname").value;
            let email = document.getElementById("mail").value;
            let contactNumber = document.getElementById("number").value;
            let question = document.getElementById("subject").value;
            let textbox = document.getElementById("message").value;
            console.log(question);

            let obj = {
                "username":name,
                "useremail":email,
                "usernumber":contactNumber,
                "userquestion":question,
                "usermessage":textbox,
            }
            array.push(obj);
            let changetostring = JSON.stringify(array);
            localStorage.setItem("contactdetails", changetostring)
        }
        submithandler();