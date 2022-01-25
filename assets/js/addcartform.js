let list = [];
        function onpageload() {
            let changetoparse = JSON.parse(localStorage.getItem("value"))
            if (changetoparse != null) {
                list = changetoparse
            }

        }
       
        function submithandler(event){
            event.preventDefault();

            let name = document.getElementById("animalname").value;
            let url = document.getElementById("imageurl").value;
            console.log(name);
            console.log(url);

            let obj = {
                "nanimal": name,
                "aurl": url,
            }
            list.push(obj);
            let changetostring = JSON.stringify(list);
            localStorage.setItem("value", changetostring);
            
            window.location.href="./../pages/addcart.html"

        }
        onpageload()
       