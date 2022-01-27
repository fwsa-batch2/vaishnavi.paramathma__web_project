let array = [];

        function submitFunction() {
            let changetoparse = JSON.parse(localStorage.getItem("animaldetails"));
            if (changetoparse != null) {
                array = changetoparse
            }
        }
        submitFunction()
        function submithandler(event) {
            event.preventDefault();
            let animalname = document.getElementById("name").value;
            let imageurl = document.getElementById("url").value;
            let knowmore = document.getElementById("aboutanimal").value
                let obj = {
                    "nameOfAnimal": animalname,
                    "iUrl": imageurl,
                    "aboutA":knowmore,
                }
            array.push(obj);
            let changetostring = JSON.stringify(array);
            localStorage.setItem("animaldetails", changetostring);
            window.location.href = "./../pages/a-zanimals.html"
        }