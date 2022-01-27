// let AddAnimal = [];
let getvalue = JSON.parse(localStorage.getItem("value"));
console.log(getvalue);
function renderAnimal(addItem) {
    let leng = addItem.length;
    console.log(leng);
    let adding=""
    for (let i = 0; i < leng; i++) {
        let obj = addItem[i];

        let animal = `<div class="card-container">
                <div class="card">
                    <img src=${obj.aurl} class="card-img" alt="imagemissing">
                    <div class="card-body">
                    <h3>${obj.nanimal}</h3>
                    <button type="button"  onclick="clickhandler()">adopt now</button>
                    </div>
                    </div>
                    </div>`
        adding = adding + animal;
    }
    document.getElementById("addingimg").innerHTML = adding;
}

renderAnimal(getvalue);

function clickhandler(){
    alert("Thanks for adopting the animal")
}