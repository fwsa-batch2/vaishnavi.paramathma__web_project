let AddAnimal = [];
        function renderAnimal(addItem) {
            let leng = addItem.length;
            console.log(leng);
            let adding;
            for (let i = 0; i < leng; i++) {
                let obj = addItem[i];
                             
                let animal = `<div id="dddd">
                <div id ="img-div" >
                    <h3>${obj.nanimal}</h3>
                    <img src=${obj.aurl} id="addpic" alt="imagemissing">
                    <p><button type="button" id="adoptbt"onclick="clickhandler()">adopt now</button></p>
                    </div>
                    </div>`;
                adding = adding + animal;
            }
            document.getElementById("addingimg").innerHTML = adding;
        }
        let getvalue = JSON.parse(localStorage.getItem("value"));
        renderAnimal(getvalue);
        console.log(getvalue);